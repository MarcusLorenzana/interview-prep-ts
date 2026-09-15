import assert from "node:assert/strict";
import { countErrorsPerService, type Log } from "./starter";

const logs: Log[] = [
  { service: "api", level: "error", timestamp: 0 },
  { service: "api", level: "error", timestamp: 10_000 },
  { service: "worker", level: "error", timestamp: 20_000 },
  { service: "api", level: "info", timestamp: 100_000 },
];

assert.deepEqual(countErrorsPerService(logs, 30_000), { api: 2, worker: 1 });
console.log("ok");
