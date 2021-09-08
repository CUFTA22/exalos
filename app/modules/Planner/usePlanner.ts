import { updatePlannerCells } from '@server/utils/util_Planner';
import {
  Planner_Cell,
  Planner_Cell_Updates,
  Planner_Data,
  Planner_Type,
  Planner_Updates,
} from '@ts/planner.types';
import useFetch from 'app/api/useFetch';
import { PlannerContext } from 'app/store/planner/CTX';
import { useContext } from 'react';

/**
 * Used for all updates on planner data
 * @returns {Planner_Updates}
 */

const usePlanner = (): Planner_Updates => {
  const { plannerData, selectedCells, visibleTypes, selectedWeek, dispatch } =
    useContext(PlannerContext);
  const client = useFetch();

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

  const updateCellsData = async (week_id: string, data: Planner_Cell_Updates) => {
    // Send all cells for update
    data.cell_ids = selectedCells.map((cell) => cell.cell_id);

    const newData = updatePlannerCells(plannerData, week_id, data);
    setPlannerData(newData);

    await client.patch(`/api/planner/week/${week_id}`, { ...data });
  };

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
