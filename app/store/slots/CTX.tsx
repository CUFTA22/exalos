import React, { useReducer } from 'react';
import { Slots_Context } from '@ts/slots.types';
import { initialState, slotsReducer } from './Reducer';

export const SlotsContext = React.createContext<Slots_Context>(initialState);

export const SlotsCTXProvider = ({ children }) => {
  const [state, dispatch] = useReducer(slotsReducer, initialState);

  return (
    <SlotsContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </SlotsContext.Provider>
  );
};
