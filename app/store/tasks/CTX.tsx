import React, { useReducer } from 'react';
import { Tasks_Context } from '@ts/tasks.types';
import { initialState, tasksReducer } from './Reducer';

export const TasksContext = React.createContext<Tasks_Context>(initialState);

export const TasksCTXProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tasksReducer, initialState);

  return (
    <TasksContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
