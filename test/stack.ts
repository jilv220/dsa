import { describe, expect, test } from "bun:test";
import Stack from "../stack.ts";

test("stack", () => {
  const list = new Stack<number>();

  list.push(5);
  list.push(7);
  list.push(9);

  expect(list.pop()).toBe(9);
  expect(list.length).toBe(2);

  list.push(11);
  expect(list.pop()).toBe(11);
  expect(list.pop()).toBe(7);
  expect(list.peek()).toBe(5);
  expect(list.pop()).toBe(5);
  expect(list.pop()).toBe(undefined);

  list.push(69);
  expect(list.peek()).toBe(69);
  expect(list.length).toBe(1);
});
