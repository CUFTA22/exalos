import { type2Color } from '@utils/resources/boardData';
import { rouletteEuNumbers, rouletteUsNumbers } from '@utils/resources/rouletteNumbers';
import useFetch from 'app/api/useFetch';
import { BlackjackContext } from 'app/store/blackjack/CTX';
import { RouletteContext } from 'app/store/roulette/CTX';
import { useContext } from 'react';
import { calculateHandValue, generateRandomCard } from './utils';

/**
 * Used for all logic of roulette
 * @returns {Roulette_Updates}
 */

const useBlackjack = () => {
  const { coins, betAmount, isLoading, dispatch, handHouse, handPlayer } =
    useContext(BlackjackContext);

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
    const newCard = generateRandomCard();
    dispatch({ type: 'HAND_ADD', payload: { field: 'handPlayer', card: newCard } });

    const newCards = [...handPlayer, newCard];
    const sum = calculateHandValue(newCards);

    if (sum > 21) {
      dispatch({ type: 'FINISH_GAME', payload: { newCoins: coins - betAmount } });
    }
  };

  // --------------------------------------------------------------------------------------------
  // Handle Hit action
  // --------------------------------------------------------------------------------------------

  const handleStand = () => {
    let houseVal = calculateHandValue(handHouse);
    let playerVal = calculateHandValue(handPlayer);
    let newCards = [...handHouse];

    while (houseVal < playerVal) {
      const newCard = generateRandomCard();
      newCards.push(newCard);

      houseVal = calculateHandValue(newCards);
    }

    console.log(houseVal);

    const isWin = playerVal > houseVal || houseVal > 21;
    const isDraw = playerVal === houseVal && playerVal <= 21;
    const newCoins = isDraw ? coins : isWin ? coins + betAmount : coins - betAmount;

    dispatch({
      type: 'FINISH_GAME',
      payload: { newCoins: newCoins, field: 'handHouse', cards: newCards },
    });
  };

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
