import { generateRandomCard } from '@module/Games/Blackjack/utils';
import { Blackjack_Context, Blackjack_Context_Action } from '@ts/blackjack.types';

const noop = () => false;

export const initialState: Blackjack_Context = {
  coins: 1000,
  handPlayer: [],
  handHouse: [],
  isLoading: false, // Is playing game
  betAmount: 0,
  dispatch: noop,
};

export const blackjackReducer = (
  state: Blackjack_Context,
  action: Blackjack_Context_Action
): Blackjack_Context => {
  switch (action.type) {
    case 'AMOUNT_ADD':
      return { ...state, betAmount: action.payload };
    case 'LOADING_ADD':
      return { ...state, isLoading: action.payload };
    case 'COINS_ADD':
      return { ...state, coins: action.payload };
    case 'START_GAME':
      return {
        ...state,
        isLoading: true,
        handHouse: [generateRandomCard(), generateRandomCard()],
        handPlayer: [generateRandomCard(), generateRandomCard()],
      };
    case 'HAND_ADD':
      return {
        ...state,
        [action.payload.field]: [...state[action.payload.field], action.payload.card],
      };
    case 'FINISH_GAME':
      return {
        ...state,
        coins: action.payload.newCoins,
        betAmount: 0,
        isLoading: false,
      };

    default:
      return state;
  }
};
