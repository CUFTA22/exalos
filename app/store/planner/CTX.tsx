import React, { useReducer } from 'react';
import { Planner_Context } from '@ts/planner.types';
import { initialState, plannerReducer } from './Reducer';

export const PlannerContext = React.createContext<Planner_Context>(initialState);

export const PlannerCTXProvider = ({ children }) => {
  const [state, dispatch] = useReducer(plannerReducer, initialState);

  return (
    <PlannerContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </PlannerContext.Provider>
  );
};
