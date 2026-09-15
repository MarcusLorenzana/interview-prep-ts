import assert from "node:assert/strict";
import { retry } from "./starter";

let attempts = 0;
const value = await retry(async () => {
  attempts += 1;
  if (attempts < 3) throw new Error("fail");
  return "ok";
}, 3);

assert.equal(value, "ok");
console.log("ok");
