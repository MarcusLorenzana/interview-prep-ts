import assert from "node:assert/strict";
import { dedupeEvents, type Event } from "./starter";

const events: Event[] = [
  { id: "a", timestamp: 1, payload: { x: 1 } },
  { id: "a", timestamp: 2, payload: { x: 2 } },
  { id: "b", timestamp: 3, payload: { x: 3 } },
];

assert.deepEqual(dedupeEvents(events), [events[0], events[2]]);
console.log("ok");
