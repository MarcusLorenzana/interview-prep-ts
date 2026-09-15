import assert from "node:assert/strict";
import { topKFrequent } from "./starter";

assert.deepEqual(topKFrequent([1, 1, 1, 2, 2, 3], 2), [1, 2]);
console.log("ok");
