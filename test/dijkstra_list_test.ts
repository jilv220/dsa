import { expect, test } from "bun:test";
import { list1 } from "./graph";
import dijkstra_list from "../dijkstra_list";

test("dijkstra via adj list", function () {
  expect(dijkstra_list(0, 6, list1)).toEqual([0, 1, 4, 5, 6]);
});
