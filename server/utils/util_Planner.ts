import { PlannerDocument } from '@server/modules/planner/planner.model';
import type from '@server/modules/planner/type';
import {
  Planner_Cell,
  Planner_Cell_Updates,
  Planner_Data,
  Planner_Settings,
  Planner_Type,
  Planner_Type_Updates,
  Planner_Week,
} from '@ts/planner.types';
import dayjs from 'dayjs';
import { updateItemById } from './functions';

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
      task_id: '',
      text: '',
      type_id: '',
      meet_url: '',
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
) => {
  const weekIdx = plannerData.calendar.findIndex((week) => week.week_id === week_id);

  data.cell_ids.map((cell_id) => {
    const cellIdx = plannerData.calendar[weekIdx].cells.findIndex(
      (cell) => cell.cell_id === cell_id
    );

    plannerData.calendar[weekIdx].cells[cellIdx] = handleUpdateCell(
      plannerData.calendar[weekIdx].cells[cellIdx],
      data
    );
  });

  return plannerData;
};

export const getLeanTypes = (types: Planner_Type[]): Planner_Type[] =>
  types.map(({ color, name, _id }) => ({ color, name, _id }));
