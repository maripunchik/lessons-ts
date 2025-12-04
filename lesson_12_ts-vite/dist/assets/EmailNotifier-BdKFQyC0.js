const a=`import type { IWatchable } from "../IWatchable";\r
\r
export default class EmailNotifier implements IWatchable {\r
  update=(balance: number)=>{\r
    console.log(\`Email: Ваш новий баланс = \${balance} грн\`);\r
  }\r
}\r
`;export{a as default};
