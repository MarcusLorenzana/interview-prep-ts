import assert from "node:assert/strict";
import { findYamlFiles, type Node } from "./starter";

const tree: Node = {
  name: "root",
  children: [
    { name: "a.yaml" },
    { name: "sub", children: [{ name: "b.yml" }, { name: "c.yaml" }] },
  ],
};

assert.deepEqual(findYamlFiles(tree), ["a.yaml", "c.yaml"]);
console.log("ok");
