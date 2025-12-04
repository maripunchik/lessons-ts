import type { IPaymentStrategy } from "../IPaymentStrategy";

export default class CreditCardPayment implements IPaymentStrategy {
  pay(amount: number): void {
    console.log(`Оплата кредитною карткою: ${amount}`);
  }
}
