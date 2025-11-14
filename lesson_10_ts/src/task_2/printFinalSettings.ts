
import { FieldLabels } from "./types.js";

export default function printFinalSettings<T extends Record<string, any>>(
  data: T,
  labels: FieldLabels<T>
): void {
  for (const key in data) {
    const label = labels[key] || key;
    console.log(`${label}:${data[key]}`);
  }
}
