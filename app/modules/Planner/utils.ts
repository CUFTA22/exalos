import { Planner_Cell, Planner_Week } from '@ts/planner.types';

// Groups different days into separate arrays
export const transformWeekData = (week: Planner_Week) => {
  const dayLength = week.cells.filter((cell) => cell.cell_id.substr(0, 2) === 'd0').length;
  return new Array(week.cells.length / dayLength)
    .fill('')
    .map((_, i) => week.cells.slice(i * dayLength, (i + 1) * dayLength));
};
