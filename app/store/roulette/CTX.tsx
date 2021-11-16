import React, { useReducer } from 'react';
import { Roulette_Context } from '@ts/roulette.types';
import { initialState, rouletteReducer } from './Reducer';

export const RouletteContext = React.createContext<Roulette_Context>(initialState);

export const RouletteCTXProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rouletteReducer, initialState);

  return (
    <RouletteContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </RouletteContext.Provider>
  );
};
