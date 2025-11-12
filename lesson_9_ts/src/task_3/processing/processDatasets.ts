import type { TransformerProcessor } from "../types.js";
import isValidArray from "../../isValidArray.js";
import ITransformer from "../ITransformer.js";

export default function processDatasets<T, U>(
  datasets: Record<string, T[]>,
  transformer: ITransformer<T, U>,
  processor: TransformerProcessor<T, U>
) {
  for (const [label, array] of Object.entries(datasets)) {
    if (!isValidArray(array)) {
      console.warn(`${label}: Масив невалідний або порожній.`);
      continue;
    }
    processor(label, array, transformer);
  }
}
