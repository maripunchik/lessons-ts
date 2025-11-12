import ITransformer from "../ITransformer.js";

export default class ObjectToJSONTransformer
  implements ITransformer<object, string>
{
  transform(value: object): string {
    return JSON.stringify(value, null, 2);
  }
}
