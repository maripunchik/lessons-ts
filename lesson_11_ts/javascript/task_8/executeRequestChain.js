var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import HttpRequest from "./base/HttpRequest.js";
import AuthDecorator from "./decorators/AuthDecorator.js";
import CacheDecorator from "./decorators/CacheDecorator.js";
import LoggerDecorator from "./decorators/LoggerDecorator.js";
export default function executeRequestChain() {
    return __awaiter(this, void 0, void 0, function* () {
        const baseRequest = new HttpRequest("https://jsonplaceholder.typicode.com/todos/1");
        const authRequest = new AuthDecorator(baseRequest, "my-secret-jwt");
        const cachedDRequest = new CacheDecorator(authRequest, "todo-1");
        const loggedRequest = new LoggerDecorator(cachedDRequest);
        const result = yield loggedRequest.send();
        console.log("Response:", result);
        const result2 = yield loggedRequest.send();
        console.log("Responce(cached):", result2);
    });
}
