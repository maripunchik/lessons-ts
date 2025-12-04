const e=`//  RoleCheckHandler - перевіряє, чи користувач має потрібну роль (admin, user);\r
\r
import type IRequest from "../IRequest";\r
import type { UserRole } from "../types/UserRole";\r
import BaseHandler from "./BaseHandler";\r
\r
export default class RoleCheckHandler extends BaseHandler {\r
  constructor(private requiredRole: UserRole) {\r
    super();\r
  }\r
  handle(request: IRequest): void {\r
    if (request.role !== this.requiredRole) {\r
      console.log(\`Доступ заборонено: обов'язкова роль \${this.requiredRole}\`);\r
      return;\r
    }\r
    console.log(\`Перевірку ролі пройдено (\${request.role})\`);\r
	 super.handle(request)\r
  }\r
}\r
`;export{e as default};
