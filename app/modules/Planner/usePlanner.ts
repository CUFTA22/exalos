import { Planner_Cell, Planner_Data, Planner_Type, Planner_Updates } from '@ts/planner.types';
import { PlannerContext } from 'app/store/planner/CTX';
import { useContext } from 'react';

/**
 * Used for all updates on planner data
 * @returns {Planner_Updates}
 */

const usePlanner = (): Planner_Updates => {
  const { plannerData, selectedCells, visibleTypes, selectedWeek, dispatch } =
    useContext(PlannerContext);

  // --------------------------------------------------------------------------------------------
  // Set Planner Data - initial
  // --------------------------------------------------------------------------------------------

  const setPlannerData = (data: Planner_Data) =>
    dispatch({ type: 'PLANNER_DATA_SET', payload: data });

  // --------------------------------------------------------------------------------------------
  // Cell Actions
  // --------------------------------------------------------------------------------------------

  const updateSelectedCells = (
    action: 'SELECTED_CELL_ADD' | 'SELECTED_CELL_REMOVE',
    cell: Planner_Cell
  ) => {
    return dispatch({ type: action, payload: cell });
  };

  const updateCellsData = (data: Planner_Cell) => {};

  // --------------------------------------------------------------------------------------------
  // Type Actions
  // --------------------------------------------------------------------------------------------

  const updateVisibleTypes = (
    action: 'VISIBLE_TYPES_ADD' | 'VISIBLE_TYPES_REMOVE',
    type: Planner_Type
  ) => {
    dispatch({ type: action, payload: type });
  };

  const updateTypesData = (data: Planner_Type) => {};

  // --------------------------------------------------------------------------------------------
  // Week Actions
  // --------------------------------------------------------------------------------------------

  const setSelectedWeek = (week: string) => dispatch({ type: 'SELECTED_WEEK_SET', payload: week });

  const addWeek = () => {};
  const removeWeek = () => {};

  return {
    plannerData,
    setPlannerData,
    selectedCells,
    updateSelectedCells,
    updateCellsData,
    updateVisibleTypes,
    updateTypesData,
    selectedWeek,
    setSelectedWeek,
  };
};

export default usePlanner;
