import React from 'react';
import type { LessonActivity, LearningObjective, ActivityEvidence, ActivityRuntimeState } from '../../types';
import { ReadingTask } from './ReadingTask';
import { ListeningTask } from './ListeningTask';
import { ControlledPractice } from './ControlledPractice';
import { RecordingTask } from './RecordingTask';
import { RolePlay } from './RolePlay';
import { WritingTask } from './WritingTask';
import { ExitCheck } from './ExitCheck';

interface LessonActivityRendererProps {
  activity: LessonActivity;
  evidence?: Record<string, ActivityEvidence>;
  objectives?: LearningObjective[];
  onEvidence?: (evidence: ActivityEvidence) => void;
  onResetEvidence?: (activityId: string) => void;
  runtime?: ActivityRuntimeState;
  onRuntimeChange?: (patch: Partial<ActivityRuntimeState>) => void;
}

/**
 * Generic dispatcher: receives a LessonActivity and renders the matching
 * component. The wrapper carries `data-lesson-activity` so global slide
 * keyboard navigation can opt out inside interactive controls.
 */
export const LessonActivityRenderer: React.FC<LessonActivityRendererProps> = ({
  activity,
  evidence,
  objectives,
  onEvidence,
  onResetEvidence,
  runtime,
  onRuntimeChange,
}) => {
  const activityEvidence = evidence?.[activity.id];
  const handleEvidence = (e: ActivityEvidence) => onEvidence?.(e);
  const handleReset = () => onResetEvidence?.(activity.id);

  const renderActivity = (): React.ReactNode => {
    switch (activity.kind) {
      case 'reading':
        return (
          <ReadingTask
            data={activity}
            evidence={activityEvidence}
            onEvidence={handleEvidence}
            onResetEvidence={handleReset}
          />
        );
      case 'listening':
        return (
          <ListeningTask
            data={activity}
            evidence={activityEvidence}
            onEvidence={handleEvidence}
            onResetEvidence={handleReset}
          />
        );
      case 'controlledPractice':
        return (
          <ControlledPractice
            data={activity}
            evidence={activityEvidence}
            onEvidence={handleEvidence}
            onResetEvidence={handleReset}
          />
        );
      case 'recording':
        return (
          <RecordingTask
            data={activity}
            evidence={activityEvidence}
            onEvidence={handleEvidence}
            onResetEvidence={handleReset}
          />
        );
      case 'rolePlay':
        return (
          <RolePlay
            data={activity}
            evidence={activityEvidence}
            onEvidence={handleEvidence}
            runtime={runtime}
            onRuntimeChange={onRuntimeChange}
          />
        );
      case 'writing':
        return (
          <WritingTask
            data={activity}
            evidence={activityEvidence}
            onEvidence={handleEvidence}
            onResetEvidence={handleReset}
            runtime={runtime}
            onRuntimeChange={onRuntimeChange}
          />
        );
      case 'exitCheck':
        return <ExitCheck data={activity} evidence={evidence ?? {}} objectives={objectives} />;
      default:
        return null;
    }
  };

  return <div data-lesson-activity>{renderActivity()}</div>;
};
