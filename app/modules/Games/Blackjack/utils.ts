import { randomNumber } from '@server/utils/functions';
import { BlackjackCard, blackjackCards } from '@utils/resources/blackjackCards';

export const generateRandomCard = () => blackjackCards[randomNumber(0, 12)];

export const getValue = (arr: number[]) => arr.reduce((a, b) => a + b);

export const calculateHandValue = (cards: BlackjackCard[]) => {
  if (!cards.length) return;

  let value = getValue(cards.map((c) => c.value));
  const hasAce = cards.find((c) => c.type === 'ace');

  if (value <= 11 && hasAce) value += 10;

  return value;
};
