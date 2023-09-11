import ArrayList from "../array_list.js";
import { test_list } from "./list_test.js";
import { describe, expect, test } from "bun:test";

test("simple append", () => {
  const list = new ArrayList<number>(3);
  list.append(5);
  list.append(7);
  list.append(9);

  expect(list.get(0)).toBe(5);
  expect(list.get(1)).toBe(7);
  expect(list.length).toBe(3);
});

test("append resize", () => {
  const list = new ArrayList<number>(3);
  list.append(5);
  list.append(7);
  list.append(9);

  expect(list.get(0)).toBe(5);
  expect(list.get(1)).toBe(7);
  expect(list.length).toBe(3);

  list.append(10);
  expect(list.get(3)).toBe(10);
  expect(list.length).toBe(4);
});

test("integral", () => {
  const list = new ArrayList<number>(3);
  test_list(list);
});
