import BaseHandler from "./handlers/BaseHandler";
import type IRequest from "./IRequest";

export default class RequestProcessor extends BaseHandler {
  handle(_request: IRequest): void {
    console.log(`Запит успішно оброблено!`);
  }
}
