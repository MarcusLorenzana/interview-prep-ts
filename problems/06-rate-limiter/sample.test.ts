import assert from "node:assert/strict";
import { RateLimiter } from "./starter";

const limiter = new RateLimiter();
assert.equal(limiter.allow("u1", 0), true);
assert.equal(limiter.allow("u1", 30), true);
assert.equal(limiter.allow("u1", 61), true);
console.log("ok");
