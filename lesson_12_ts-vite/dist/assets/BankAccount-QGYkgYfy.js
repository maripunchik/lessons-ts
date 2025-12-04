const r=`import type { IWatchable } from "./IWatchable";\r
\r
\r
export default class BankAccount {\r
  private listeners: IWatchable[] = [];\r
  private balance: number=0\r
  constructor(balance=0) {\r
	this.balance=balance\r
  }\r
  subscribe(observer: IWatchable) {\r
    this.listeners.push(observer);\r
  }\r
  unsubscribe(observer:IWatchable){\r
	this.listeners=this.listeners.filter(o=>o!==observer)\r
  }\r
  setBalance(amount:number){\r
	this.balance=amount\r
  }\r
  publish_balance() {\r
    this.listeners.forEach((o) => o.update(this.balance));\r
  }\r
}\r
`;export{r as default};
