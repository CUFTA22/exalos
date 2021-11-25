import React, { useReducer } from 'react';
import { Blackjack_Context } from '@ts/blackjack.types';
import { initialState, blackjackReducer } from './Reducer';

export const BlackjackContext = React.createContext<Blackjack_Context>(initialState);

export const BlackjackCTXProvider = ({ children }) => {
  const [state, dispatch] = useReducer(blackjackReducer, initialState);

  return (
    <BlackjackContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </BlackjackContext.Provider>
  );
};
