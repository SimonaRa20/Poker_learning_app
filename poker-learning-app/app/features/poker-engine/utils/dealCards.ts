import { Card } from '../../../types/poker';

export function dealCards(
  deck: Card[],
  count: number
): {
  cards: Card[];
  remainingDeck: Card[];
} {
  const cards = deck.slice(0, count);

  const remainingDeck = deck.slice(count);

  return {
    cards,
    remainingDeck,
  };
}