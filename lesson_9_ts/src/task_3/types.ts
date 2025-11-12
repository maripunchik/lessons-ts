import ITransformer from "./ITransformer.js";

export type Dataset<T> = Record<string, T[]>;

export type TransformerProcessor<T, U> = (
  label: string,
  values: T[],
  transformer: ITransformer<T, U>
) => void;
