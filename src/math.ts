export function safeDivide(left: number, right: number): number {
  if (right === 0) {
    throw new Error("Cannot divide by zero");
  }

  return left / right;
}
