const e=`import BaseHandler from "./handlers/BaseHandler";\r
import type IRequest from "./IRequest";\r
\r
export default class RequestProcessor extends BaseHandler {\r
  handle(_request: IRequest): void {\r
    console.log(\`Запит успішно оброблено!\`);\r
  }\r
}\r
`;export{e as default};
