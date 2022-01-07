import { SlotsContext } from 'app/store/slots/CTX';
import { useContext } from 'react';

const useSlots = () => {
  const { coins, betAmount, isLoading, dispatch, history } = useContext(SlotsContext);

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
    dispatch({ type: 'START_GAME', payload: 1 });
  };

  return { coins, resetCoins, betAmount, setBetAmount, isLoading, dispatch, history, startGame };
};

export default useSlots;
