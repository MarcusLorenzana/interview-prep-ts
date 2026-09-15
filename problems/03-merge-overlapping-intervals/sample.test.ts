import assert from "node:assert/strict";
import { mergeIntervals } from "./starter";

assert.deepEqual(
  mergeIntervals([[1, 3], [2, 6], [8, 10], [9, 12]]),
  [[1, 6], [8, 12]]
);
console.log("ok");
