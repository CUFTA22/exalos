import { Roulette_Context, Roulette_Context_Action } from '@ts/roulette.types';

const noop = () => false;

export const initialState: Roulette_Context = {
  coins: 1000,
  history: [],
  chat: [],
  winner: null,
  isLoading: false,
  betAmount: 0,
  betColor: null,
  dispatch: noop,
};

export const rouletteReducer = (
  state: Roulette_Context,
  action: Roulette_Context_Action
): Roulette_Context => {
  switch (action.type) {
    case 'HISTORY_ADD':
      return { ...state, history: [...state.history, action.payload] };
    case 'CHAT_ADD':
      return { ...state, chat: [...state.chat, action.payload] };
    case 'AMOUNT_ADD':
      return { ...state, betAmount: action.payload };
    case 'COLOR_ADD':
      return { ...state, betColor: action.payload };
    case 'LOADING_ADD':
      return { ...state, isLoading: action.payload };
    case 'COINS_ADD':
      return { ...state, coins: action.payload };
    case 'START_GAME':
      return { ...state, isLoading: true, winner: action.payload };
    case 'FINISH_GAME':
      return {
        ...state,
        coins: action.payload.newCoins,
        betAmount: 0,
        betColor: null,
        isLoading: false,
        history: [...state.history, action.payload.winner],
      };

    default:
      return state;
  }
};
