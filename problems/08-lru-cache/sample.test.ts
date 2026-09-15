import assert from "node:assert/strict";
import { LRUCache } from "./starter";

const cache = new LRUCache<string, number>(2);
cache.put("a", 1);
cache.put("b", 2);
assert.equal(cache.get("a"), 1);
cache.put("c", 3);
assert.equal(cache.get("b"), undefined);
console.log("ok");
