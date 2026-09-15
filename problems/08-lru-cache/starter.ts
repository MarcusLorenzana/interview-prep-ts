export class LRUCache<K, V> {
  constructor(private capacity: number) {}

  get(key: K): V | undefined {
    // TODO: return the value and mark it as recently used
    return undefined;
  }

  put(key: K, value: V): void {
    // TODO: insert or update and evict the least recently used item when full
  }
}
