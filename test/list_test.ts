import { List } from "../global.ts";
import { describe, expect, test } from "bun:test";

export function test_list(list: List<number>): void {
  list.append(5);
  list.append(7);
  list.append(9);

  expect(list.get(2)).toBe(9);
  expect(list.removeAt(1)).toBe(7);
  expect(list.length).toBe(2);

  list.append(11);
  expect(list.removeAt(1)).toBe(9);
  expect(list.remove(9)).toBe(undefined);
  expect(list.removeAt(0)).toBe(5);
  expect(list.removeAt(0)).toBe(11);
  expect(list.length).toBe(0);

  list.prepend(5);
  list.prepend(7);
  list.prepend(9);

  expect(list.get(2)).toBe(5);
  expect(list.get(0)).toBe(9);
  expect(list.remove(9)).toBe(9);
  expect(list.length).toBe(2);
  expect(list.get(0)).toBe(7);
}
