import assert from "node:assert/strict";
import { JobQueue } from "./starter";

const q = new JobQueue();
q.enqueue({ id: "1", payload: { x: 1 } });
assert.deepEqual(q.dequeue(), { id: "1", payload: { x: 1 } });
console.log("ok");
