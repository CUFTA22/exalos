import { type2Color } from '@utils/resources/boardData';
import { rouletteEuNumbers, rouletteUsNumbers } from '@utils/resources/rouletteNumbers';
import useFetch from 'app/api/useFetch';
import { BlackjackContext } from 'app/store/blackjack/CTX';
import { RouletteContext } from 'app/store/roulette/CTX';
import { useContext } from 'react';
import { generateRandomCard } from './utils';

/**
 * Used for all logic of roulette
 * @returns {Roulette_Updates}
 */

const useBlackjack = () => {
  const { coins, betAmount, isLoading, dispatch, handHouse, handPlayer } =
    useContext(BlackjackContext);
  const fetch = useFetch();

  // --------------------------------------------------------------------------------------------
  // Reset coins
  // --------------------------------------------------------------------------------------------

  const resetCoins = () => {
    dispatch({ type: 'COINS_ADD', payload: 1000 });
  };

  // --------------------------------------------------------------------------------------------
  // Set coin amount
  // --------------------------------------------------------------------------------------------

  const setBetAmount = (val: number) => {
    if (!val) return dispatch({ type: 'AMOUNT_ADD', payload: 0 });

    const newValue = betAmount + val > coins ? coins : betAmount + val;
    dispatch({ type: 'AMOUNT_ADD', payload: newValue ? newValue : betAmount });
  };

  // --------------------------------------------------------------------------------------------
  // Start the game
  // --------------------------------------------------------------------------------------------

  const startGame = () => {
    dispatch({ type: 'START_GAME' });
  };

  // --------------------------------------------------------------------------------------------
  // Handle Hit action
  // --------------------------------------------------------------------------------------------

  const handleHit = () => {
    dispatch({ type: 'HAND_ADD', payload: { field: 'handPlayer', card: generateRandomCard() } });
  };

  // --------------------------------------------------------------------------------------------
  // Handle Hit action
  // --------------------------------------------------------------------------------------------

  const handleStand = () => {};

  return {
    coins,
    betAmount,
    handHouse,
    handPlayer,
    isLoading,
    resetCoins,
    setBetAmount,
    startGame,
    handleHit,
    handleStand,
  };
};

export default useBlackjack;
