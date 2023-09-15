import { WeightedAdjacencyMatrix } from "./global";

export default function bfs(
  graph: WeightedAdjacencyMatrix,
  source: number,
  needle: number
): number[] | null {
  let seen = new Array(graph.length).fill(false);
  let prev = new Array(graph.length).fill(-1);
  seen[source] = true;
  let queue = [source];
  do {
    let curr = queue.shift() as number;
    if (curr === needle) {
      break;
    }
    const adjs = graph[curr];
    for (let i = 0; i < adjs.length; i++) {
      if (adjs[i] === 0) {
        continue;
      }
      if (seen[i]) {
        continue;
      }
      seen[i] = true;
      prev[i] = curr;
      queue.push(i);
    }
  } while (queue.length);

  let curr = needle;
  const out = [];
  while (prev[curr] !== -1) {
    out.push(curr);
    curr = prev[curr];
  }

  if (out.length) {
    return [source, ...out.reverse()];
  }
  return null;
}
