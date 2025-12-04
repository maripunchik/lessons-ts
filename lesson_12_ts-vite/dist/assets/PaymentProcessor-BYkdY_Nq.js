const t=`import type { IPaymentStrategy } from "./IPaymentStrategy";\r
\r
export default class PaymentProcessor {\r
  private strategy: IPaymentStrategy;\r
  constructor(strategy: IPaymentStrategy) {\r
    this.strategy = strategy;\r
  }\r
  setStrategy(strategy: IPaymentStrategy) {\r
    this.strategy = strategy;\r
  }\r
  process(amount: number) {\r
    this.strategy.pay(amount);\r
  }\r
}\r
`;export{t as default};
