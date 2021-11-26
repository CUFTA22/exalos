import { randomNumber } from '@server/utils/functions';
import { blackjackCards } from '@utils/resources/blackjackCards';

export const generateRandomCard = () => blackjackCards[randomNumber(0, 12)];

export const getLowestValue = (arr: number[]) => Math.min(...arr);
export const getHighestValue = (arr: number[]) => Math.max(...arr);
