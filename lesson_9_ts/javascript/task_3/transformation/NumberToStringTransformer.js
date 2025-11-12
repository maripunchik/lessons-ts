export default class NumberToStringTransformer {
    constructor(formatter) {
        this.formatter = formatter;
    }
    transform(value) {
        var _a;
        const baseValue = value.toString();
        const formatted = (_a = this.formatter) === null || _a === void 0 ? void 0 : _a.call(this, value);
        return formatted !== null && formatted !== void 0 ? formatted : baseValue;
    }
}
