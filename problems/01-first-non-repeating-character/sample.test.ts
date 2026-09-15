import assert from "node:assert/strict";
import { firstUnique } from "./starter";

assert.equal(firstUnique("swiss"), "w");
assert.equal(firstUnique("aabbc"), "c");
assert.equal(firstUnique("abcabc"), undefined);
console.log("ok");
