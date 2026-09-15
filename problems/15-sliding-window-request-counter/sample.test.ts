import assert from "node:assert/strict";
import { SlidingWindowCounter } from "./starter";

const counter = new SlidingWindowCounter();
counter.record(0);
counter.record(10);
assert.equal(counter.count(100), 2);
console.log("ok");
