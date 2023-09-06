import { assertEquals } from "https://deno.land/std@0.201.0/assert/assert_equals.ts";
import Stack from "../stack.ts";

Deno.test("stack", () => {
  const list = new Stack<number>();

  list.push(5);
  list.push(7);
  list.push(9);

  assertEquals(list.pop(), 9);
  assertEquals(list.length, 2);

  list.push(11);
  assertEquals(list.pop(), 11);
  assertEquals(list.pop(), 7);
  assertEquals(list.peek(), 5);
  assertEquals(list.pop(), 5);
  assertEquals(list.pop(), undefined);

  list.push(69);
  assertEquals(list.peek(), 69);
  assertEquals(list.length, 1);
});
