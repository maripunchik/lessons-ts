import { transformations } from "./demoTransformers.js";
import processDatasets from "../processing/processDatasets.js";
import logTransformedValues from "../processing/LogTransformedValues.js";

export default function runAllTransformations() {
  for (const { label, transformer, values } of transformations) {
    processDatasets({ [label]: values }, transformer, logTransformedValues);
  }
}