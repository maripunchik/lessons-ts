const e=`import type { IWatchable } from "../IWatchable";\r
\r
export default class Logger implements IWatchable {\r
  update(balance: number) {\r
    console.log(\`Log: Баланс змінено, тепер = \${balance} грн\`);\r
  }\r
}\r
`;export{e as default};
