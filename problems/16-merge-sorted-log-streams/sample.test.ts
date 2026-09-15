import assert from "node:assert/strict";
import { mergeSortedLogs } from "./starter";

assert.deepEqual(mergeSortedLogs([[1, 4], [2, 3, 5]]), [1, 2, 3, 4, 5]);
console.log("ok");
