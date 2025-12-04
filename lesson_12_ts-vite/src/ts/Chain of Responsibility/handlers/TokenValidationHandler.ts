
import BaseHandler from "./BaseHandler";
import type IRequest from "../IRequest";

//  TokenValidationHandler - перевіряє, чи токен існує;
export default class TokenValidationHandler extends BaseHandler {
  handle(request: IRequest): void {
    if (request.token) super.handle(request);
    else console.log("Дані не валідні (не мають бути порожніми)");
  }
}
