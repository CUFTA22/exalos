import { cryptoRandomNumber } from '@server/utils/functions';
import { BlackjackCard, blackjackCards } from '@utils/resources/blackjackCards';

export const generateRandomCard = (currentArr: BlackjackCard[]) => {
  let newCard = blackjackCards[cryptoRandomNumber(0, 12)] as BlackjackCard;

  if (currentArr.find((item) => item.value === newCard.value))
    return generateRandomCard(currentArr);

  return newCard;
};

export const generateFirstDeal = () => {
  const cards = [] as BlackjackCard[];

  for (let i = 0; i < 4; i++) {
    cards.push(generateRandomCard(cards));
  }

  return cards;
};

export const getValue = (arr: number[]) => arr.reduce((a, b) => a + b);

export const calculateHandValue = (cards: BlackjackCard[]) => {
  if (!cards.length) return;

  let value = getValue(cards.map((c) => c.value));
  const hasAce = cards.find((c) => c.type === 'ace');

  if (value <= 11 && hasAce) value += 10;

  return value;
};
