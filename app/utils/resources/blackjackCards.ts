import {
  Circle16Filled,
  Heart16Filled,
  LeafOne16Filled,
  Stop16Filled,
} from '@fluentui/react-icons';
import { randomNumber } from '@server/utils/functions';

export interface BlackjackCard {
  value: number;
  color: 'red' | 'black';
  symbol: any;
  type: 'num' | 'ace' | 'K' | 'Q' | 'J';
}

export const generateRandomColor = () => ['red', 'black'][randomNumber(0, 1)] as 'red' | 'black';

export const generateRandomSymbol = () =>
  [Heart16Filled, LeafOne16Filled, Circle16Filled, Stop16Filled][randomNumber(0, 3)];

export const blackjackCards: BlackjackCard[] = [
  {
    value: 1,
    color: generateRandomColor(),
    symbol: generateRandomSymbol(),
    type: 'ace',
  },
  {
    value: 2,
    color: generateRandomColor(),
    symbol: generateRandomSymbol(),
    type: 'num',
  },
  {
    value: 3,
    color: generateRandomColor(),
    symbol: generateRandomSymbol(),
    type: 'num',
  },
  {
    value: 4,
    color: generateRandomColor(),
    symbol: generateRandomSymbol(),
    type: 'num',
  },
  {
    value: 5,
    color: generateRandomColor(),
    symbol: generateRandomSymbol(),
    type: 'num',
  },
  {
    value: 6,
    color: generateRandomColor(),
    symbol: generateRandomSymbol(),
    type: 'num',
  },
  {
    value: 7,
    color: generateRandomColor(),
    symbol: generateRandomSymbol(),
    type: 'num',
  },
  {
    value: 8,
    color: generateRandomColor(),
    symbol: generateRandomSymbol(),
    type: 'num',
  },
  {
    value: 9,
    color: generateRandomColor(),
    symbol: generateRandomSymbol(),
    type: 'num',
  },
  {
    value: 10, // 10
    color: generateRandomColor(),
    symbol: generateRandomSymbol(),
    type: 'num',
  },
  {
    value: 10, // J
    color: generateRandomColor(),
    symbol: generateRandomSymbol(),
    type: 'J',
  },
  {
    value: 10, // Q
    color: generateRandomColor(),
    symbol: generateRandomSymbol(),
    type: 'Q',
  },
  {
    value: 10, // K
    color: generateRandomColor(),
    symbol: generateRandomSymbol(),
    type: 'K',
  },
];
