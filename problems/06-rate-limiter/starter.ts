export class RateLimiter {
  allow(userId: string, timestamp: number): boolean {
    // TODO: track timestamps per user and discard stale requests
    return true;
  }
}
