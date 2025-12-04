import type { IWatchable } from "./IWatchable";


export default class BankAccount {
  private listeners: IWatchable[] = [];
  private balance: number=0
  constructor(balance=0) {
	this.balance=balance
  }
  subscribe(observer: IWatchable) {
    this.listeners.push(observer);
  }
  unsubscribe(observer:IWatchable){
	this.listeners=this.listeners.filter(o=>o!==observer)
  }
  setBalance(amount:number){
	this.balance=amount
  }
  publish_balance() {
    this.listeners.forEach((o) => o.update(this.balance));
  }
}
