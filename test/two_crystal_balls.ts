import { describe, expect, test } from "bun:test";
import { twoCrystalBalls } from "../two_crystal_balls.ts";

test("two crytal balls", () => {
  const idx = Math.floor(Math.random() * 10000);
  const data = new Array(10000).fill(false);

  for (let i = idx; i < 10000; ++i) {
    data[i] = true;
  }

  expect(twoCrystalBalls(data)).toBe(idx);
  expect(twoCrystalBalls(new Array(821).fill(false))).toBe(-1);
});
