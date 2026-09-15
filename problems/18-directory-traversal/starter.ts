export type Node = { name: string; children?: Node[] };

export function findYamlFiles(node: Node): string[] {
  // TODO: do a DFS/BFS over the tree and collect yaml files
  return [];
}
