import in_order_search from "../BTInOrder";
import { tree } from "./tree";
import { test, expect } from "bun:test";

test("In order", function () {
  expect(in_order_search(tree)).toEqual([
    5, 7, 10, 15, 20, 29, 30, 45, 50, 100,
  ]);
});
