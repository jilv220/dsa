import { assertEquals } from "https://deno.land/std@0.201.0/assert/assert_equals.ts";
import { List } from "../global.ts";

export function test_list(list: List<number>): void {
  list.append(5);
  list.append(7);
  list.append(9);

  assertEquals(list.get(2), 9);
  assertEquals(list.removeAt(1), 7);
  assertEquals(list.length, 2);

  list.append(11);
  assertEquals(list.removeAt(1), 9);
  assertEquals(list.remove(9), undefined);
  assertEquals(list.removeAt(0), 5);
  assertEquals(list.removeAt(0), 11);
  assertEquals(list.length, 0);

  list.prepend(5);
  list.prepend(7);
  list.prepend(9);

  assertEquals(list.get(2), 5);
  assertEquals(list.get(0), 9);
  assertEquals(list.remove(9), 9);
  assertEquals(list.length, 2);
  assertEquals(list.get(0), 7);
}
