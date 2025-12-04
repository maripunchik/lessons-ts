import getRandomTeachingQuote from "./getRandomTeachingQuote";
import { quotes } from "./quotes";

export default function updateQuote(prevQuote?: string): string {
  let quote: string;
  do {
    quote = getRandomTeachingQuote();
  } while (quote === prevQuote && quotes.length > 1);
  return quote;
}
