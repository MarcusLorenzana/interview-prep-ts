import assert from "node:assert/strict";
import { flatten } from "./starter";

assert.deepEqual(flatten([1, [2, [3, 4]], 5]), [1, 2, 3, 4, 5]);
console.log("ok");
