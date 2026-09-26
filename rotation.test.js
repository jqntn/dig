import { rotationAt } from "./rotation.js";

const QUARTER_TURN_MILLISECONDS = 2500;
const FULL_TURN_MILLISECONDS = 10_000;

const cases = [
  [0, 0],
  [QUARTER_TURN_MILLISECONDS, Math.PI / 2],
  [FULL_TURN_MILLISECONDS, 2 * Math.PI],
];

for (const [milliseconds, expected] of cases) {
  const actual = rotationAt(milliseconds);
  if (actual !== expected) {
    throw new Error(`rotationAt(${milliseconds}) = ${actual}, not ${expected}`);
  }
}
