import type { NonEmptyArray } from "./task_1/types/types.js";

export default function isValidArray<T>(
  array: T[] | undefined | null
): array is NonEmptyArray<T> {
  return Array.isArray(array) && array.length > 0;
}
