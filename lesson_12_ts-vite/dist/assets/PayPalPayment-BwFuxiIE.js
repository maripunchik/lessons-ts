const a=`import type { IPaymentStrategy } from "../IPaymentStrategy";\r
\r
export default class PayPalPayment implements IPaymentStrategy {\r
  pay(amount: number): void {\r
    console.log(\`Оплата через PayPal: \${amount}\`);\r
  }\r
}\r
`;export{a as default};
