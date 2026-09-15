export class TTLStore {
  set(key: string, value: unknown, ttlMs: number): void {
    // TODO: store a value and expiry timestamp
  }

  get(key: string): unknown {
    // TODO: return undefined if the item expired
    return undefined;
  }

  delete(key: string): void {
    // TODO: remove a key if it exists
  }
}
