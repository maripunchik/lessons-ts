import type { ArrayProcessor } from "./types/types.js";
import isValidArray from "../isValidArray.js";
import logType from "./logType.js";

export default function logDatasetValues<T>(
  datasets: Record<string, T[]>,
  processor: ArrayProcessor<T>
): void {
  for (const [label, array] of Object.entries(datasets)) {
    if (!isValidArray(array)) {
      console.warn(`${label}: Масив невалідний або порожній.`);
      continue;
    }
    logType(label, array, processor);
  }
}
