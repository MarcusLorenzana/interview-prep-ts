import assert from "node:assert/strict";
import { detectCycle } from "./starter";

const cycle = detectCycle({ A: ["B"], B: ["C"], C: ["A"] });
assert.ok(cycle !== null);
assert.equal(cycle![0], "A");
console.log("ok");
