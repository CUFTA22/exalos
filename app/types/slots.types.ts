import { Dispatch } from 'react';

// -----------------------------------------------------------------
// For slots context
// -----------------------------------------------------------------

export type Slots_Context_Action =
  | { type: 'AMOUNT_ADD'; payload: number }
  | { type: 'LOADING_ADD'; payload: boolean }
  | { type: 'COINS_ADD'; payload: number }
  | { type: 'HISTORY_ADD'; payload: number }
  | { type: 'START_GAME'; payload: number }
  | { type: 'FINISH_GAME'; payload: { newCoins: number; winner: number } };

export interface Slots_Context {
  coins: number;
  history: any[];
  betAmount: number;
  isLoading: boolean;
  dispatch: Dispatch<Slots_Context_Action>;
}
