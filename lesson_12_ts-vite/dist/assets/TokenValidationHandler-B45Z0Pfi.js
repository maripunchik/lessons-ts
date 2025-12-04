const e=`\r
import BaseHandler from "./BaseHandler";\r
import type IRequest from "../IRequest";\r
\r
//  TokenValidationHandler - перевіряє, чи токен існує;\r
export default class TokenValidationHandler extends BaseHandler {\r
  handle(request: IRequest): void {\r
    if (request.token) super.handle(request);\r
    else console.log("Дані не валідні (не мають бути порожніми)");\r
  }\r
}\r
`;export{e as default};
