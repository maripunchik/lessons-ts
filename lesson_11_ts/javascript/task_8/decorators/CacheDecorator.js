var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class CacheDecorator {
    constructor(request, key) {
        this.request = request;
        this.key = key;
    }
    send() {
        return __awaiter(this, void 0, void 0, function* () {
            const cached = CacheDecorator.cache.get(this.key);
            if (cached !== undefined) {
                console.log(`Returning cached response for key: ${this.key}`);
                return cached;
            }
            const response = yield this.request.send();
            CacheDecorator.cache.set(this.key, response);
            console.log(`Cached response for key: ${this.key}`);
            return response;
        });
    }
}
CacheDecorator.cache = new Map();
export default CacheDecorator;
