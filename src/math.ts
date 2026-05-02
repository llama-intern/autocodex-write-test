export function safeDivide(left: number, right: number): number {
  if (right === 0) {
    throw new Error("safeDivide does not accept a zero divisor");
  }

  return left / right;
}
