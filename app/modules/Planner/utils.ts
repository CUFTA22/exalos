import { Planner_Cell, Planner_Week } from '@ts/planner.types';

// Groups all cells into days and filters by settings
// cell[] => cell[][]  |  by days, first array will be d0, second d1...

export const transformWeekData = (week: Planner_Week, from: string = '00', to: string = '24') => {
  const filteredWeek: Planner_Week = {
    ...week,
    cells: week.cells.filter(
      (cell) =>
        parseInt(cell.cell_id.substr(4, 2)) >= parseInt(from) &&
        parseInt(cell.cell_id.substr(4, 2)) <= parseInt(to)
    ),
  };

  const dayLength = filteredWeek.cells.filter((cell) => cell.cell_id.substr(0, 2) === 'd0').length;

  return new Array(filteredWeek.cells.length / dayLength)
    .fill('')
    .map((_, i) => filteredWeek.cells.slice(i * dayLength, (i + 1) * dayLength));
};
