import type IRequest from "./IRequest";

export default interface IHandler {
  setNext(handler: IHandler): IHandler;
  handle(request: IRequest):void
}