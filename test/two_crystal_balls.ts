import { assertEquals } from "https://deno.land/std@0.201.0/assert/assert_equals.ts";
import { twoCrystalBalls } from "../two_crystal_balls.ts";

Deno.test("two crytal balls", () => {
  const idx = Math.floor(Math.random() * 10000);
  const data = new Array(10000).fill(false);

  for (let i = idx; i < 10000; ++i) {
    data[i] = true;
  }

  assertEquals(twoCrystalBalls(data), idx);
  assertEquals(twoCrystalBalls(new Array(821).fill(false)), -1);
});
