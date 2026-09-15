import assert from "node:assert/strict";
import { groupAnagrams } from "./starter";

assert.deepEqual(
  groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]),
  [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
);
console.log("ok");
