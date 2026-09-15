import assert from "node:assert/strict";
import { isValidBrackets } from "./starter";

assert.equal(isValidBrackets("{[()]}"), true);
assert.equal(isValidBrackets("{[(])}"), false);
console.log("ok");
