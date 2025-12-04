import type { IPaymentStrategy } from "./IPaymentStrategy";

export default class PaymentProcessor {
  private strategy: IPaymentStrategy;
  constructor(strategy: IPaymentStrategy) {
    this.strategy = strategy;
  }
  setStrategy(strategy: IPaymentStrategy) {
    this.strategy = strategy;
  }
  process(amount: number) {
    this.strategy.pay(amount);
  }
}
