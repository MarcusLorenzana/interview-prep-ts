import assert from "node:assert/strict";
import { TTLStore } from "./starter";

const store = new TTLStore();
store.set("a", 1, 100);
assert.equal(store.get("a"), 1);
console.log("ok");
