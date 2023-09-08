import { Point } from "./global.ts";

const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

function walk(
  maze: string[],
  wall: string,
  curr: Point,
  end: Point,
  seen: boolean[][],
  path: Point[],
): boolean {
  /**
   * Base case
   */

  // off the map
  if (
    curr.x < 0 ||
    curr.x > maze[0].length ||
    curr.y < 0 ||
    curr.y > maze.length
  ) {
    return false;
  }

  // wall
  if (maze[curr.y][curr.x] === wall) return false;

  // win
  if (curr.x === end.x && curr.y === end.y) {
    path.push(curr);
    return true;
  }

  // seen it?
  if (seen[curr.y][curr.x]) return false;

  /**
   * Recursive case
   */

  // pre
  seen[curr.y][curr.x] = true;
  path.push(curr);

  // recurse
  for (let i = 0; i < dir.length; i++) {
    const [x, y] = dir[i];
    const isOut = walk(
      maze,
      wall,
      {
        x: curr.x + x,
        y: curr.y + y,
      },
      end,
      seen,
      path,
    );
    if (isOut) return true;
  }

  // post
  path.pop();

  return false;
}

export default function solve(
  maze: string[],
  wall: string,
  start: Point,
  end: Point,
): Point[] {
  const seen: boolean[][] = [[]];
  for (let i = 0; i < maze.length; i++) {
    seen.push(new Array(maze[0].length).fill(false));
  }

  const path: Point[] = [];
  walk(maze, wall, start, end, seen, path);
  return path;
}
