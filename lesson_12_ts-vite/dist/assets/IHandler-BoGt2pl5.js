const e=`import type IRequest from "./IRequest";\r
\r
export default interface IHandler {\r
  setNext(handler: IHandler): IHandler;\r
  handle(request: IRequest):void\r
}`;export{e as default};
