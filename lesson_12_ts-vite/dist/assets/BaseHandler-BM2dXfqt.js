const e=`import type IHandler from "../IHandler";\r
import type IRequest from "../IRequest";\r
\r
export default class BaseHandler implements IHandler {\r
  private nextHandler: IHandler | null = null;\r
  setNext(handler: IHandler): IHandler {\r
    this.nextHandler = handler;\r
    return handler;\r
  }\r
  handle(request: IRequest): void {\r
    if (this.nextHandler) this.nextHandler.handle(request);\r
  }\r
}\r
`;export{e as default};
