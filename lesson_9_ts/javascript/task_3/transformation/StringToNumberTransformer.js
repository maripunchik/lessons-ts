import throwErrorHandler from "../errorHandlers.js";
export default class StringToNumberTransformer {
    constructor(errorHandler = throwErrorHandler) {
        this.errorHandler = errorHandler;
    }
    //---
    transform(value) {
        const result = Number(value);
        if (isNaN(result)) {
            return this.errorHandler(value);
        }
        return result;
    }
}
