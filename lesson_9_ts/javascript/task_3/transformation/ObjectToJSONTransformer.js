export default class ObjectToJSONTransformer {
    transform(value) {
        return JSON.stringify(value, null, 2);
    }
}
