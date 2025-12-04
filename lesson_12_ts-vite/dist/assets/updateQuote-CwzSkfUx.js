const t=`import getRandomTeachingQuote from "./getRandomTeachingQuote";\r
import { quotes } from "./quotes";\r
\r
export default function updateQuote(prevQuote?: string): string {\r
  let quote: string;\r
  do {\r
    quote = getRandomTeachingQuote();\r
  } while (quote === prevQuote && quotes.length > 1);\r
  return quote;\r
}\r
`;export{t as default};
