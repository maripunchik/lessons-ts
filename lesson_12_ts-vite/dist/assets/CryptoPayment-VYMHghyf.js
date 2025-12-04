const t=`import type { IPaymentStrategy } from "../IPaymentStrategy";\r
\r
export default class CryptoPayment implements IPaymentStrategy {\r
  pay(amount: number): void {\r
    console.log(\`Оплата у криптовалюті: \${amount}\`);\r
  }\r
}\r
`;export{t as default};
