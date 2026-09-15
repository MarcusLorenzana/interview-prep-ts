import assert from "node:assert/strict";
import { mergeConfig } from "./starter";

assert.deepEqual(
  mergeConfig(
    { server: { port: 3000, timeout: 10 }, regions: ["us-east-1"] },
    {},
    { server: { timeout: 30 }, regions: ["us-west-2"] },
  ),
  { server: { port: 3000, timeout: 30 }, regions: ["us-west-2"] },
);
console.log("ok");
