import { WeightedAdjacencyList } from "./global";

function hasUnvisited(seen: boolean[], dists: number[]) {
  return seen.some((v, i) => v === false && dists[i] < Infinity);
}

function getLowestUnvisited(seen: boolean[], dists: number[]) {
  const unvistedIdx: number[] = [];
  seen.forEach((v, i) => {
    if (v === false) {
      unvistedIdx.push(i);
    }
  });
  const distsUnvisted = unvistedIdx.map((i) => dists[i]);

  let idx = -1;
  let min = Infinity;
  for (let i = 0; i < distsUnvisted.length; i++) {
    if (distsUnvisted[i] < min) {
      min = distsUnvisted[i];
      idx = i;
    }
  }

  return unvistedIdx[idx];
}

export default function dijkstra_list(
  source: number,
  sink: number,
  arr: WeightedAdjacencyList
): number[] {
  const prev = new Array(arr.length).fill(-1);
  const seen = new Array(arr.length).fill(false);
  const dists = new Array(arr.length).fill(Infinity);
  dists[source] = 0;

  while (hasUnvisited(seen, dists)) {
    const curr = getLowestUnvisited(seen, dists);
    seen[curr] = true;

    const adjs = arr[curr];
    for (const edge of adjs) {
      if (seen[edge.to]) {
        continue;
      }
      const dist = dists[curr] + edge.weight;
      if (dist < dists[edge.to]) {
        dists[edge.to] = dist;
        prev[edge.to] = curr;
      }
    }
  }

  const out = [];
  let curr = sink;
  while (prev[curr] !== -1) {
    out.push(curr);
    curr = prev[curr];
  }

  out.push(source);
  return out.reverse();
}
