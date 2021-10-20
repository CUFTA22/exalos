import { PlannerDocument } from '@server/modules/planner/planner.model';
import {
  Planner_Cell,
  Planner_Cell_Updates,
  Planner_Data,
  Planner_Settings,
  Planner_Type,
  Planner_Week,
} from '@ts/planner.types';
import dayjs from 'dayjs';
import { removeWeekById } from './functions';

export const getLeanTypes = (types: Planner_Type[]): Planner_Type[] =>
  types.map(({ color, name, _id }) => ({ color, name, _id }));

// -------------------------------------------------------------------------------------------------------
// Init calendar
// -------------------------------------------------------------------------------------------------------

export const getDefaultSettings = (): Planner_Settings => ({
  start_time: '00',
  end_time: '24',
  include_weekends: true,
});

const generateCells = (): Planner_Cell[] => {
  let arr: Planner_Cell[] = [];
  Array.apply(null, Array(7 * 24)).map((_x: undefined, i: number) => {
    const cycle = Math.floor(i / 24);
    return arr.push({
      cell_id: `d${cycle}_h${i - cycle * 24}`,
      task_id: null,
      text: '',
      meet_url: '',
      type_id: null,
    });
  });
  return arr;
};

export const getInitCalendar = (): Planner_Week[] => {
  const data: Planner_Week = {
    week_id: dayjs().startOf('week').format('DD.MM.YY'), // 12.08.21
    cells: generateCells(),
  };

  return [data];
};

// -------------------------------------------------------------------------------------------------------
// Update cell
// -------------------------------------------------------------------------------------------------------

const handleUpdateCell = (cell: Planner_Cell, newData: Planner_Cell_Updates): Planner_Cell => ({
  cell_id: cell.cell_id,
  meet_url: newData.meet_url || cell.meet_url,
  task_id: newData.task_id || cell.task_id,
  text: newData.text || cell.text,
  type_id: newData.type_id || cell.type_id,
});

export const updatePlannerCells = (
  plannerData: Planner_Data | PlannerDocument,
  week_id: string,
  data: Planner_Cell_Updates
): Planner_Data => {
  const weekIdx = plannerData?.calendar.findIndex((week) => week.week_id === week_id);

  data.cell_ids.map((cell_id) => {
    const cellIdx = plannerData?.calendar[weekIdx].cells.findIndex(
      (cell) => cell.cell_id === cell_id
    );

    plannerData.calendar[weekIdx].cells[cellIdx] = handleUpdateCell(
      plannerData.calendar[weekIdx].cells[cellIdx],
      data
    );
  });

  return plannerData;
};

// -------------------------------------------------------------------------------------------------------
// Add week
// -------------------------------------------------------------------------------------------------------

export const addPlannerWeek = (plannerData: Planner_Data | PlannerDocument) => {
  const nextWeek = dayjs().startOf('week').add(1, 'week').add(1, 'day').format('DD.MM.YY');
  const lastCreated = plannerData.calendar[plannerData.calendar.length - 1].week_id;

  // Prevent going too far in the future ( only 1 week )
  if (nextWeek === lastCreated) throw new Error('BadRequest');

  plannerData.calendar.push({
    week_id: nextWeek,
    cells: generateCells(),
  });

  return plannerData;
};

// -------------------------------------------------------------------------------------------------------
// Delete week
// -------------------------------------------------------------------------------------------------------

export const deletePlannerWeek = (plannerData: Planner_Data | PlannerDocument, week_id: string) => {
  plannerData.calendar = removeWeekById(plannerData.calendar, week_id);

  return plannerData;
};
