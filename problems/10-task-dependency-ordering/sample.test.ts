import assert from "node:assert/strict";
import { topologicalSort } from "./starter";

const tasks = ["deploy", "build", "test", "lint"];
const dependencies: Array<[string, string]> = [
  ["deploy", "build"],
  ["build", "test"],
  ["test", "lint"],
];

const result = topologicalSort(tasks, dependencies);
assert.ok(result.includes("lint"));
assert.ok(result.indexOf("lint") < result.indexOf("test"));
assert.ok(result.indexOf("test") < result.indexOf("build"));
assert.ok(result.indexOf("build") < result.indexOf("deploy"));
console.log("ok");
