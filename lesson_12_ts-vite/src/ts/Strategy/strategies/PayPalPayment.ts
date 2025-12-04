import type { IPaymentStrategy } from "../IPaymentStrategy";

export default class PayPalPayment implements IPaymentStrategy {
  pay(amount: number): void {
    console.log(`Оплата через PayPal: ${amount}`);
  }
}
