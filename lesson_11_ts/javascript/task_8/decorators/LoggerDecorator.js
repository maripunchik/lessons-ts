var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export default class LoggerDecorator {
    constructor(request) {
        this.request = request;
    }
    send() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Sending request...`);
            const start = Date.now();
            const response = yield this.request.send();
            const duration = Date.now() - start;
            console.log(`Request completed in ${duration}ms`);
            return response;
        });
    }
}
