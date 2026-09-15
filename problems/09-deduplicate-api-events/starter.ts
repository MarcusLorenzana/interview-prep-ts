export type Event = { id: string; timestamp: number; payload: unknown };

export function dedupeEvents(events: Event[]): Event[] {
  // TODO: keep the first instance of each id and preserve order
  return [];
}
