import { assertEquals } from "https://deno.land/std@0.201.0/assert/mod.ts";
import { binarySearch } from "../search.ts";

Deno.test("binary search array", () => {
  const foo = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];
  assertEquals(binarySearch(foo, 69), 3);
  assertEquals(binarySearch(foo, 1336), -1);
  assertEquals(binarySearch(foo, 1), 0);
  assertEquals(binarySearch(foo, 0), -1);
});
