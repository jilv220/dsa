import { describe, expect, test } from "bun:test";
import Queue from "../queue.js";

test("queue", () => {
  const list = new Queue<number>();
  list.enqueue(5);
  list.enqueue(7);
  list.enqueue(9);

  expect(list.dequeue()).toBe(5);
  expect(list.length).toBe(2);

  list.enqueue(11);
  expect(list.dequeue()).toBe(7);
  expect(list.dequeue()).toBe(9);
  expect(list.peek()).toBe(11);
  expect(list.dequeue()).toBe(11);
  expect(list.dequeue()).toBe(undefined);
  expect(list.length).toBe(0);

  list.enqueue(69);
  expect(list.peek()).toBe(69);
  expect(list.length).toBe(1);
});
