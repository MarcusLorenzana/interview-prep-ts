export type Job = { id: string; payload: unknown };

export class JobQueue {
  enqueue(job: Job): void {
    // TODO: append a job to the queue
  }

  dequeue(): Job | undefined {
    // TODO: return the first queued job or undefined
    return undefined;
  }

  acknowledge(jobId: string): void {
    // TODO: mark the job as complete
  }
}
