const e=`import updateQuote from "./updateQuote";\r
import renderQuote from "./renderQuote";\r
\r
export function renderCard() {\r
  const container = document.getElementById("app") as HTMLDivElement;\r
  if (!container) return;\r
\r
  let currentQuote = updateQuote();\r
  renderQuote(container, currentQuote);\r
\r
  setInterval(async () => {\r
    currentQuote = updateQuote(currentQuote);\r
    renderQuote(container, currentQuote);\r
  }, 5000);\r
}\r
`;export{e as default};
