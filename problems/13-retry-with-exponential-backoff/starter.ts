export async function retry<T>(fn: () => Promise<T>, maxAttempts: number): Promise<T> {
  // TODO: retry on failure with exponential backoff and then rethrow
  throw new Error("Not implemented");
}
