const e=`//  RateLimitHandler - перевіряє, чи не перевищено ліміт запитів.\r
\r
import type IRequest from "../IRequest";\r
import BaseHandler from "./BaseHandler";\r
\r
export default class RateLimitHandler extends BaseHandler {\r
  private static requestCount: Record<string, number> = {};\r
\r
  handle(request: IRequest): void {\r
    const count = RateLimitHandler.requestCount[request.userId] || 0;\r
    if (count >= 3) {\r
		console.log(\`Доступ заборонено: перевищено ліміт запитів\`);\r
		return\r
    }\r
	 RateLimitHandler.requestCount[request.userId]=count+1\r
	 console.log(\`Перевірку обмеження ліміту запитів пройдено\`);\r
	 super.handle(request)\r
  }\r
}\r
`;export{e as default};
