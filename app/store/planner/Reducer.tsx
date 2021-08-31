import { Planner_Context, Planner_Context_Action } from '@ts/planner.types';
import removeArrayItem from 'app/utils/functions/removeArrayItem';
import React from 'react';

const noop = () => false;

export const initialState: Planner_Context = {
  plannerData: null,
  visibleTypes: [],
  selectedCells: [],
  selectedWeek: '',
  dispatch: noop,
};

export const plannerReducer = (
  state: Planner_Context,
  action: Planner_Context_Action
): Planner_Context => {
  switch (action.type) {
    case 'SELECTED_CELL_ADD':
      return {
        ...state,
        selectedCells: [...state.selectedCells, action.payload],
      };
    case 'SELECTED_CELL_REMOVE':
      return {
        ...state,
        selectedCells: removeArrayItem(state.selectedCells, action.payload),
      };
    case 'SELECTED_WEEK_SET':
      return {
        ...state,
        selectedWeek: action.payload,
      };
    case 'PLANNER_DATA_SET':
      return {
        ...state,
        plannerData: action.payload,
      };
    default:
      return state;
  }
};
