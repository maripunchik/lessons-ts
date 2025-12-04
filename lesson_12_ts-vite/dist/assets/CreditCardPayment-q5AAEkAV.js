const t=`import type { IPaymentStrategy } from "../IPaymentStrategy";\r
\r
export default class CreditCardPayment implements IPaymentStrategy {\r
  pay(amount: number): void {\r
    console.log(\`Оплата кредитною карткою: \${amount}\`);\r
  }\r
}\r
`;export{t as default};
