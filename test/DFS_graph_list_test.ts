import { expect, test } from "bun:test";
import { list2 } from "./graph";
import dfs from "../DFS_graph_list";

test("dfs: graph", function () {
  expect(dfs(list2, 0, 6)).toEqual([0, 1, 4, 5, 6]);

  expect(dfs(list2, 6, 0)).toEqual(null);
});
