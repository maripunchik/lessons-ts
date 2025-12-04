import type { IWatchable } from "../IWatchable";

export default class EmailNotifier implements IWatchable {
  update=(balance: number)=>{
    console.log(`Email: Ваш новий баланс = ${balance} грн`);
  }
}
