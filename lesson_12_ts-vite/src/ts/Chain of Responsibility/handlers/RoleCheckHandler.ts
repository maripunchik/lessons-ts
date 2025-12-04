//  RoleCheckHandler - перевіряє, чи користувач має потрібну роль (admin, user);

import type IRequest from "../IRequest";
import type { UserRole } from "../types/UserRole";
import BaseHandler from "./BaseHandler";

export default class RoleCheckHandler extends BaseHandler {
  constructor(private requiredRole: UserRole) {
    super();
  }
  handle(request: IRequest): void {
    if (request.role !== this.requiredRole) {
      console.log(`Доступ заборонено: обов'язкова роль ${this.requiredRole}`);
      return;
    }
    console.log(`Перевірку ролі пройдено (${request.role})`);
	 super.handle(request)
  }
}
