const t=`\r
import { quotes } from "./quotes";\r
\r
export default function getRandomTeachingQuote(): string {\r
  const q = quotes[Math.floor(Math.random() * quotes.length)];\r
  return q;\r
}\r
`;export{t as default};
