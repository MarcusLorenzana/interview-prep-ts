export async function runWithLimit<T>(tasks: Array<() => Promise<T>>, concurrency: number): Promise<T[]> {
  // TODO: manage a worker pool and keep results in input order
  return [];
}
