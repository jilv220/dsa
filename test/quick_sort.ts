import { assertEquals } from "https://deno.land/std@0.201.0/assert/mod.ts";
import quick_sort from "../quick_sort.ts";

Deno.test("quick-sort", () => {
  const arr = [9, 3, 7, 4, 69, 420, 42];
  quick_sort(arr);
  assertEquals(arr, [3, 4, 7, 9, 42, 69, 420]);
});
