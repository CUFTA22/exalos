import { Planner_Cell, Planner_Data, Planner_Settings, Planner_Week } from '@ts/planner.types';

// Groups all cells into days and filters by settings
// cell[] => cell[][]  |  by days, first array will be d0, second d1...

export const transformWeekData = (week: Planner_Week, settings: Planner_Settings) => {
  // Cuts off days based on users settings
  const filteredWeek: Planner_Week = {
    ...week,
    cells: week.cells.filter(
      (cell) =>
        parseInt(cell.cell_id.substr(4, 2)) >= parseInt(settings.start_time) &&
        parseInt(cell.cell_id.substr(4, 2)) < parseInt(settings.end_time)
    ),
  };

  const dayLength = filteredWeek.cells.filter((cell) => cell.cell_id.substr(0, 2) === 'd0').length;

  return new Array(filteredWeek.cells.length / dayLength)
    .fill('')
    .map((_, i) => filteredWeek.cells.slice(i * dayLength, (i + 1) * dayLength));
};

// Returns new cell on key press ( left, right, top or bottom )

export const getNewCellOnKeyDown = (
  plannerData: Planner_Data,
  selectedCells: Planner_Cell[],
  selectedWeek: string,
  e: KeyboardEvent
): Planner_Cell => {
  let newCell_ID = selectedCells[0].cell_id;

  const hour = parseInt(newCell_ID.substr(4));
  const day = parseInt(newCell_ID.substr(1, 1));
  const maxHours = parseInt(plannerData.settings.end_time);
  const minHours = parseInt(plannerData.settings.start_time);
  const noOfDays = plannerData.settings.include_weekends ? 6 : 4;

  // prettier-ignore
  if (['ArrowUp'].includes(e.key) && hour > minHours) newCell_ID = `d${day}_h${hour - 1}`;
  // prettier-ignore
  if (['ArrowLeft'].includes(e.key) && day > 0) newCell_ID = `d${day - 1}_h${hour}`;
  // prettier-ignore
  if (['ArrowDown'].includes(e.key) && hour < maxHours - 1) newCell_ID = `d${day}_h${hour + 1}`;
  // prettier-ignore
  if (['ArrowRight'].includes(e.key) && day < noOfDays) newCell_ID = `d${day + 1}_h${hour}`;

  const newCell = findCellForGivenWeek(plannerData, selectedWeek, newCell_ID);

  return newCell;
};

// Finds cell for a given week id

export const findCellForGivenWeek = (
  plannerData: Planner_Data,
  week_id: string,
  cell_id: string
): Planner_Cell => {
  if (!cell_id) return null;

  const weekIdx = plannerData.calendar.findIndex((week) => week.week_id === week_id);

  const cellIdx = plannerData.calendar[weekIdx].cells.findIndex((cell) => cell.cell_id === cell_id);

  return plannerData.calendar[weekIdx].cells[cellIdx];
};
