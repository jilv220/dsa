import { assertEquals } from "https://deno.land/std@0.201.0/assert/mod.ts";
import { bubbleSort } from "../bubble_sort.ts";

Deno.test("bubble-sort", function () {
  const arr = [9, 3, 7, 4, 69, 420, 42];
  bubbleSort(arr);

  assertEquals(arr, [3, 4, 7, 9, 42, 69, 420]);
});
