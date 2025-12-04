import type IHandler from "../IHandler";
import type IRequest from "../IRequest";

export default class BaseHandler implements IHandler {
  private nextHandler: IHandler | null = null;
  setNext(handler: IHandler): IHandler {
    this.nextHandler = handler;
    return handler;
  }
  handle(request: IRequest): void {
    if (this.nextHandler) this.nextHandler.handle(request);
  }
}
