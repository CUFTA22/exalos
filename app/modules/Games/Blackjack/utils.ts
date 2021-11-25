import { randomNumber } from '@server/utils/functions';
import { blackjackCards } from '@utils/resources/blackjackCards';

export const generateRandomCard = () => blackjackCards[randomNumber(0, 13)];
