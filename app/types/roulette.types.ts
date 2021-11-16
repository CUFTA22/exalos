import { Dispatch } from 'react';

// European Roulette = 37 total  |  18 red     * 2 win
//                               |  18 black   * 2 win
//                               |  1  green   * 30 win

// -----------------------------------------------------------------
// For planner context
// -----------------------------------------------------------------

export type Roulette_Context_Action = { type: 'HISTORY_ADD'; payload: string };

export interface Roulette_Context {
  coins: number;
  history: string[];
  chat: string[];
  placedBet: string;
  isLoading: boolean;
  dispatch: Dispatch<Roulette_Context_Action>;
}
