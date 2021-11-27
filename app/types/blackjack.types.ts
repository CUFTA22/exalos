import { BlackjackCard } from '@utils/resources/blackjackCards';
import { Dispatch } from 'react';

// -----------------------------------------------------------------
// For blackjack context
// -----------------------------------------------------------------

export type Blackjack_Context_Action =
  | { type: 'AMOUNT_ADD'; payload: number }
  | { type: 'LOADING_ADD'; payload: boolean }
  | { type: 'COINS_ADD'; payload: number }
  | { type: 'HAND_ADD'; payload: { field: 'handPlayer' | 'handHouse'; card: BlackjackCard } }
  | { type: 'START_GAME' }
  | {
      type: 'FINISH_GAME';
      payload: { newCoins: number; field?: 'handPlayer' | 'handHouse'; cards?: BlackjackCard[] };
    };

export interface Blackjack_Context {
  coins: number;
  handPlayer: BlackjackCard[];
  handHouse: BlackjackCard[];
  betAmount: number;
  isLoading: boolean;
  dispatch: Dispatch<Blackjack_Context_Action>;
}
