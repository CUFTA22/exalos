import { Dispatch } from 'react';

// European Roulette = 37 total  |  18 red     * 2 win
//                               |  18 black   * 2 win
//                               |  1  green   * 30 win

// -----------------------------------------------------------------
// For planner context
// -----------------------------------------------------------------

export type Roulette_Context_Action =
  | { type: 'HISTORY_ADD'; payload: number }
  | { type: 'CHAT_ADD'; payload: string }
  | { type: 'AMOUNT_ADD'; payload: number }
  | { type: 'COLOR_ADD'; payload: 'red' | 'green' | 'black' | null }
  | { type: 'LOADING_ADD'; payload: boolean }
  | { type: 'COINS_ADD'; payload: number }
  | { type: 'START_GAME'; payload: number }
  | { type: 'FINISH_GAME'; payload: { newCoins: number; winner: number } };

export interface Roulette_Context {
  coins: number;
  history: number[];
  chat: string[];
  winner: number; // Winning number from response
  betColor: 'red' | 'green' | 'black' | null;
  betAmount: number;
  isLoading: boolean;
  dispatch: Dispatch<Roulette_Context_Action>;
}
