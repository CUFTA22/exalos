import { Slots_Context, Slots_Context_Action } from '@ts/slots.types';

const noop = () => false;

export const initialState: Slots_Context = {
  coins: 1000,
  history: [],
  isLoading: false,
  betAmount: 0,
  dispatch: noop,
};

export const slotsReducer = (state: Slots_Context, action: Slots_Context_Action): Slots_Context => {
  switch (action.type) {
    case 'HISTORY_ADD':
      return { ...state, history: [...state.history, action.payload] };
    case 'AMOUNT_ADD':
      return { ...state, betAmount: action.payload };
    case 'LOADING_ADD':
      return { ...state, isLoading: action.payload };
    case 'COINS_ADD':
      return { ...state, coins: action.payload };
    case 'START_GAME':
      return { ...state, isLoading: true };
    case 'FINISH_GAME':
      return {
        ...state,
        coins: action.payload.newCoins,
        betAmount: 0,
        isLoading: false,
        history: [...state.history, action.payload.winner],
      };

    default:
      return state;
  }
};
