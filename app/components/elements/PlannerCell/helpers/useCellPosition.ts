import { Planner_Cell } from '@ts/planner.types';

type Position = 'top' | 'middle' | 'bottom' | 'solo' | '';

const getCellPosition = (cell_id: string, selectedCells: Planner_Cell[]): Position => {
  let pos: Position = '';
  selectedCells.map((cell, i) => {
    if (cell.cell_id === cell_id && i === 0 && selectedCells.length !== 1) pos = 'top';
    else if (cell.cell_id === cell_id && i === selectedCells.length) pos = 'bottom';
    else if (cell.cell_id === cell_id && i > 0 && i < selectedCells.length + 1) pos = 'middle';
    else if (cell.cell_id === cell_id) pos = 'solo';
  });

  return pos;
};

export default getCellPosition;
