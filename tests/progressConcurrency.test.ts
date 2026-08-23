import test from 'node:test';
import assert from 'node:assert/strict';
import type { QueryResultRow } from 'pg';
import {
  mutateReviewCardsWithClient,
  mutateUserProgressWithClient,
  type ProgressTransactionClient,
  type ReviewCardState,
} from '../src/server/db.ts';

interface FakeProgressRow extends QueryResultRow {
  user_id: string;
  viewed_slides: string[];
  passed_quizzes: number[];
  review_cards: Record<string, ReviewCardState>;
  custom_notes: string | null;
  updated_at: string;
}

const card: ReviewCardState = {
  cardId: 'card-1',
  lessonNumber: 1,
  intervalDays: 1,
  easeFactor: 2.5,
  reps: 0,
  dueDate: '2026-08-22T10:00:00.000Z',
  lastReviewedAt: null,
};

function initialRow(): FakeProgressRow {
  return {
    user_id: '2c13f58d-0e4f-4d44-8b7b-a8f4fc446a92',
    viewed_slides: ['l1_s1'],
    passed_quizzes: [1],
    review_cards: { [card.cardId]: card },
    custom_notes: 'existing note',
    updated_at: '2026-08-22T10:00:00.000Z',
  };
}

class FakeProgressClient implements ProgressTransactionClient {
  row: FakeProgressRow;
  readonly commands: string[] = [];
  private transactionSnapshot: FakeProgressRow | null = null;

  constructor(row: FakeProgressRow) {
    this.row = structuredClone(row);
  }

  async query<Row extends QueryResultRow = QueryResultRow>(
    text: string,
    values: unknown[] = []
  ): Promise<{ rows: Row[]; rowCount: number | null }> {
    const command = text.replace(/\s+/g, ' ').trim().toLowerCase();
    this.commands.push(command);

    if (command === 'begin') {
      this.transactionSnapshot = structuredClone(this.row);
      return { rows: [], rowCount: null };
    }
    if (command === 'commit') {
      this.transactionSnapshot = null;
      return { rows: [], rowCount: null };
    }
    if (command === 'rollback') {
      if (this.transactionSnapshot) this.row = this.transactionSnapshot;
      this.transactionSnapshot = null;
      return { rows: [], rowCount: null };
    }
    if (command.startsWith('insert into public.user_progress')) {
      return { rows: [], rowCount: 0 };
    }
    if (command.includes('for update')) {
      return { rows: [structuredClone(this.row) as unknown as Row], rowCount: 1 };
    }
    if (command.includes('set viewed_slides')) {
      this.row.viewed_slides = structuredClone(values[1] as string[]);
      this.row.passed_quizzes = structuredClone(values[2] as number[]);
      this.row.custom_notes = (values[3] as string | null) ?? null;
      this.row.updated_at = '2026-08-22T11:00:00.000Z';
      return { rows: [structuredClone(this.row) as unknown as Row], rowCount: 1 };
    }
    if (command.includes('set review_cards')) {
      this.row.review_cards = JSON.parse(String(values[1])) as Record<string, ReviewCardState>;
      this.row.updated_at = '2026-08-22T11:00:00.000Z';
      return { rows: [structuredClone(this.row) as unknown as Row], rowCount: 1 };
    }

    throw new Error(`Unexpected query: ${command}`);
  }
}

test('progress mutation locks the row and cannot erase review cards', async () => {
  const client = new FakeProgressClient(initialRow());

  const { progress } = await mutateUserProgressWithClient(client, client.row.user_id, (current) => ({
    viewedSlides: [...current.viewedSlides, 'l1_s2'],
    passedQuizzes: [...current.passedQuizzes, 2],
    customNotes: 'updated note',
    result: undefined,
  }));

  assert.deepEqual(client.row.review_cards, { [card.cardId]: card });
  assert.deepEqual(progress.reviewCards, { [card.cardId]: card });
  assert.match(client.commands[1], /on conflict \(user_id\) do nothing/);
  assert.match(client.commands[2], /for update/);
  assert.doesNotMatch(client.commands[3], /review_cards\s*=/);
});

test('SRS mutation cannot erase slides, quizzes, or notes', async () => {
  const client = new FakeProgressClient(initialRow());

  await mutateReviewCardsWithClient(client, client.row.user_id, (current) => ({
    reviewCards: {
      ...current.reviewCards,
      [card.cardId]: { ...card, reps: 1, intervalDays: 3 },
    },
    result: undefined,
  }));

  assert.deepEqual(client.row.viewed_slides, ['l1_s1']);
  assert.deepEqual(client.row.passed_quizzes, [1]);
  assert.equal(client.row.custom_notes, 'existing note');
  assert.doesNotMatch(client.commands[3], /viewed_slides|passed_quizzes|custom_notes/);
});

test('sequential mutations each use the latest locked state', async () => {
  const client = new FakeProgressClient(initialRow());
  const seenStates: string[][] = [];

  for (const slide of ['l1_s2', 'l1_s3']) {
    await mutateUserProgressWithClient(client, client.row.user_id, (current) => {
      seenStates.push([...current.viewedSlides]);
      return {
        viewedSlides: [...current.viewedSlides, slide],
        passedQuizzes: current.passedQuizzes,
        customNotes: current.customNotes,
        result: undefined,
      };
    });
  }

  assert.deepEqual(seenStates, [['l1_s1'], ['l1_s1', 'l1_s2']]);
  assert.deepEqual(client.row.viewed_slides, ['l1_s1', 'l1_s2', 'l1_s3']);
  assert.equal(client.commands.filter((command) => command.includes('for update')).length, 2);
});

test('mutation failure rolls the transaction back', async () => {
  const original = initialRow();
  const client = new FakeProgressClient(original);

  await assert.rejects(
    mutateUserProgressWithClient(client, client.row.user_id, () => {
      throw new Error('mutation failed');
    }),
    /mutation failed/
  );

  assert.deepEqual(client.row, original);
  assert.equal(client.commands.at(-1), 'rollback');
  assert.equal(client.commands.includes('commit'), false);
});
