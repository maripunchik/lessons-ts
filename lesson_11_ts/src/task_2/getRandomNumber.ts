export default function getRandomNumber(min: number, max: number): number {
  if (min > max) {
    throw new Error("min не може бути більшим за max");
  }
  return min + Math.floor(Math.random() * (max - min + 1));
}
