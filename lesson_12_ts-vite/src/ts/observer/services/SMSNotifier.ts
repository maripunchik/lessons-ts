import type { IWatchable } from "../IWatchable";

export default class SMSNotifier implements IWatchable {
  update=(balance: number)=> {
    console.log(`SMS: Ваш новий баланс = ${balance} грн`);
  }
}
