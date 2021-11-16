import { Roulette_Context, Roulette_Context_Action } from '@ts/roulette.types';

const noop = () => false;

export const initialState: Roulette_Context = {
  coins: 1000,
  history: [],
  chat: [],
  placedBet: '',
  isLoading: false,
  dispatch: noop,
};

export const rouletteReducer = (
  state: Roulette_Context,
  action: Roulette_Context_Action
): Roulette_Context => {
  switch (action.type) {
    case 'HISTORY_ADD':
      return { ...state, history: [...state.history, action.payload] };
    default:
      return state;
  }
};
