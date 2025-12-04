import type { IWatchable } from "../IWatchable";

export default class Logger implements IWatchable {
  update(balance: number) {
    console.log(`Log: Баланс змінено, тепер = ${balance} грн`);
  }
}
