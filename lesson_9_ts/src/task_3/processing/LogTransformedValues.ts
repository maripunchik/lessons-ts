import { logFailure } from "../errorHandlers.js";
import { TransformerProcessor } from "../types.js";

const logTransformedValues: TransformerProcessor<any, any> = (
  label,
  values,
  transformer
) => {
  console.group(label);
  for (const value of values) {
    try {
      const result = transformer.transform(value);

      const formatted = typeof result === "string" ? `"${result}"` : result;

      console.log(`${value} -> ${formatted}`);
    } catch (error) {
      logFailure(value, error);
    }
  }
  console.groupEnd();
};

export default logTransformedValues;
