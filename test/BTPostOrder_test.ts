import post_order_search from "../BTPostOrder";
import { tree } from "./tree";
import { test, expect } from "bun:test";

test("Post order", function () {
  expect(post_order_search(tree)).toEqual([
    7, 5, 15, 10, 29, 45, 30, 100, 50, 20,
  ]);
});
