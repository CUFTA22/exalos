import useFetch from 'app/api/useFetch';
import { RouletteContext } from 'app/store/roulette/CTX';
import { useContext } from 'react';

/**
 * Used for all logic of roulette
 * @returns {Roulette_Updates}
 */

const useRoulette = () => {
  const { coins, history, placedBet, chat, isLoading, dispatch } = useContext(RouletteContext);
  const fetch = useFetch();

  return { coins, history, placedBet, chat, isLoading };
};

export default useRoulette;
