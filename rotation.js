const TURNS_PER_SECOND = 0.1;
const MILLISECONDS_PER_SECOND = 1000;

export const rotationAt = (milliseconds = 0) =>
  (milliseconds / MILLISECONDS_PER_SECOND) * TURNS_PER_SECOND * 2 * Math.PI;
