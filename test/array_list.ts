import { assertEquals } from "https://deno.land/std@0.201.0/assert/mod.ts";
import ArrayList from "../array_list.ts";
import { test_list } from "./list_test.ts";

Deno.test("simple append", () => {
  const list = new ArrayList<number>(3);
  list.append(5);
  list.append(7);
  list.append(9);

  assertEquals(list.get(0), 5);
  assertEquals(list.get(1), 7);
  assertEquals(list.length, 3);
});

Deno.test("append resize", () => {
  const list = new ArrayList<number>(3);
  list.append(5);
  list.append(7);
  list.append(9);

  assertEquals(list.get(0), 5);
  assertEquals(list.get(1), 7);
  assertEquals(list.length, 3);

  list.append(10);
  assertEquals(list.get(3), 10);
  assertEquals(list.length, 4);
});

Deno.test("integral", () => {
  const list = new ArrayList<number>(3);
  test_list(list);
});
