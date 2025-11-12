import ITransformer from "../ITransformer.js";
import throwErrorHandler from "../errorHandlers.js";

export default class StringToNumberTransformer
  implements ITransformer<string, number>
{
  constructor(
    private readonly errorHandler: (input: string) => never = throwErrorHandler
  ) {}
  //---
  transform(value: string): number {
    const result = Number(value);
    if (isNaN(result)) {
      return this.errorHandler(value);
    }
    return result;
  }
}
