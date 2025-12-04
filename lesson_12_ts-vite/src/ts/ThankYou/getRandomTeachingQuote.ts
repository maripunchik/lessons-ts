
import { quotes } from "./quotes";

export default function getRandomTeachingQuote(): string {
  const q = quotes[Math.floor(Math.random() * quotes.length)];
  return q;
}
