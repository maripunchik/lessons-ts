import ITransformer from "../ITransformer.js";

export default class NumberToStringTransformer
  implements ITransformer<number, string>
{
  constructor(
    private readonly formatter?: (value: number) => string | undefined | null
  ) {}
  transform(value: number): string {
    const baseValue = value.toString();
    const formatted = this.formatter?.(value);
    return formatted ?? baseValue;
  }
}
