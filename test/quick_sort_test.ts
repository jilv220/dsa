import { describe, expect, test } from "bun:test";
import quick_sort from "../quick_sort.js";

test("quick-sort", () => {
  const arr = [9, 3, 7, 4, 69, 420, 42];
  quick_sort(arr);
  expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);
});
