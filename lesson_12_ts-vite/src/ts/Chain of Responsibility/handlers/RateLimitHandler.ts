//  RateLimitHandler - перевіряє, чи не перевищено ліміт запитів.

import type IRequest from "../IRequest";
import BaseHandler from "./BaseHandler";

export default class RateLimitHandler extends BaseHandler {
  private static requestCount: Record<string, number> = {};

  handle(request: IRequest): void {
    const count = RateLimitHandler.requestCount[request.userId] || 0;
    if (count >= 3) {
		console.log(`Доступ заборонено: перевищено ліміт запитів`);
		return
    }
	 RateLimitHandler.requestCount[request.userId]=count+1
	 console.log(`Перевірку обмеження ліміту запитів пройдено`);
	 super.handle(request)
  }
}
