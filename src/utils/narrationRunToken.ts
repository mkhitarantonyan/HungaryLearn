/**
 * Minimal run-token used to invalidate stale async narration callbacks.
 * When a new run starts (or the current run is stopped), any callback that
 * still holds an old token can no longer mutate the current run's state.
 */
export class NarrationRunToken {
  private id = 0;

  /** Advance to a new run and return its token. */
  next(): number {
    this.id += 1;
    return this.id;
  }

  /** True only while `token` is still the active run. */
  isCurrent(token: number): boolean {
    return this.id === token;
  }

  /** Invalidate the current run (e.g. on stop or unmount). */
  invalidate(): void {
    this.id += 1;
  }
}
