import assert from "node:assert/strict";
import { runWithLimit } from "./starter";

const result = await runWithLimit(
  [
    () => Promise.resolve(1),
    () => Promise.resolve(2),
    () => Promise.resolve(3),
  ],
  2,
);

assert.deepEqual(result, [1, 2, 3]);
console.log("ok");
