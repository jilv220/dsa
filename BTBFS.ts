import { BinaryNode } from "./global";

export default function bfs(head: BinaryNode<number>, needle: number): boolean {
  const q: (BinaryNode<number> | null)[] = [head];
  while (q.length) {
    const curr = q.shift();
    if (!curr) {
      continue;
    }
    if (curr.value === needle) {
      return true;
    }
    // simply loop and push if the node is an array instead of only two children?
    q.push(curr.left);
    q.push(curr.right);
  }
  return false;
}
