import updateQuote from "./updateQuote";
import renderQuote from "./renderQuote";

export function renderCard() {
  const container = document.getElementById("app") as HTMLDivElement;
  if (!container) return;

  let currentQuote = updateQuote();
  renderQuote(container, currentQuote);

  setInterval(async () => {
    currentQuote = updateQuote(currentQuote);
    renderQuote(container, currentQuote);
  }, 5000);
}
