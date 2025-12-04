const e=`import type { IWatchable } from "../IWatchable";\r
\r
export default class SMSNotifier implements IWatchable {\r
  update=(balance: number)=> {\r
    console.log(\`SMS: Ваш новий баланс = \${balance} грн\`);\r
  }\r
}\r
`;export{e as default};
