import { describe, expect, it } from "vitest";
import { safeDivide } from "../src/math.js";

describe("safeDivide", () => {
  it("divides finite numbers", () => {
    expect(safeDivide(10, 2)).toBe(5);
  });
});
