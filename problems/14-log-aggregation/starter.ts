export type Log = {
  service: string;
  level: "info" | "warn" | "error";
  timestamp: number;
};

export function countErrorsPerService(logs: Log[], windowMs: number): Record<string, number> {
  // TODO: filter the time window and count errors per service
  return {};
}
