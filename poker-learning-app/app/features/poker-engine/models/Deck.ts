import { Card, Rank, Suit } from '../../../types/poker';

const suits: Suit[] = ['H', 'D', 'C', 'S'];

const ranks: Rank[] = [
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'J',
  'Q',
  'K',
  'A',
];

export function createDeck(): Card[] {
  const deck: Card[] = [];

  for (const suit of suits) {
    for (const rank of ranks) {
      deck.push({
        suit,
        rank,
      });
    }
  }

  return deck;
}
