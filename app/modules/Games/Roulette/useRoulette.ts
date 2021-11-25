import { type2Color } from '@utils/resources/boardData';
import { rouletteEuNumbers, rouletteUsNumbers } from '@utils/resources/rouletteNumbers';
import useFetch from 'app/api/useFetch';
import { RouletteContext } from 'app/store/roulette/CTX';
import { useContext } from 'react';

/**
 * Used for all logic of roulette
 * @returns {Roulette_Updates}
 */

const useRoulette = () => {
  const { coins, history, betAmount, betColor, chat, isLoading, winner, dispatch } =
    useContext(RouletteContext);
  const fetch = useFetch();

  // --------------------------------------------------------------------------------------------
  // Send message
  // --------------------------------------------------------------------------------------------

  const sendMessage = (msg: string) => {
    dispatch({ type: 'CHAT_ADD', payload: msg });
  };

  // --------------------------------------------------------------------------------------------
  // Reset coins
  // --------------------------------------------------------------------------------------------

  const resetCoins = () => {
    dispatch({ type: 'COINS_ADD', payload: 1000 });
  };

  // --------------------------------------------------------------------------------------------
  // Set bet color - red, black or green
  // --------------------------------------------------------------------------------------------

  const setBetColor = (val: string) => {
    const color = type2Color[val];
    dispatch({ type: 'COLOR_ADD', payload: color });
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
  // Set coin amount
  // --------------------------------------------------------------------------------------------

  const startSpin = async (type: 'eu' | 'us') => {
    const result = await fetch.post('/api/roulette');
    if (!result) return;

    dispatch({ type: 'START_GAME', payload: result.data });

    setTimeout(() => {
      const numbers = type === 'eu' ? rouletteEuNumbers : rouletteUsNumbers;

      const resultColor = numbers.find((num) => parseInt(num.n) === result.data).c;

      const isWin = resultColor === betColor;
      const coinDiff = betAmount * (betColor === 'green' ? 7 : 1);

      const newCoins = isWin ? coins + coinDiff : coins - betAmount;

      dispatch({ type: 'FINISH_GAME', payload: { newCoins, winner: result.data } });
    }, 12000);
  };

  return {
    coins,
    history,
    winner,
    betAmount,
    betColor,
    chat,
    isLoading,
    resetCoins,
    sendMessage,
    setBetAmount,
    setBetColor,
    startSpin,
  };
};

export default useRoulette;
