export function mergeConfig(
  defaults: Record<string, any>,
  env: Record<string, any>,
  user: Record<string, any>,
): Record<string, any> {
  // TODO: merge values with precedence defaults < env < user
  return {};
}
