import usePlanner from '@module/Apps/Planner/usePlanner';

type Position = 'top' | 'middle' | 'bottom' | 'solo' | '';

interface Cell_Return {
  isSelected: boolean;
}

const useCell = (cell_id: string): Cell_Return => {
  const { plannerData, selectedWeek, selectedCells } = usePlanner();
  // let pos: Position = '';
  // selectedCells.map((cell, i) => {
  //   if (cell.cell_id === cell_id && i === 0 && selectedCells.length !== 1) pos = 'top';
  //   else if (cell.cell_id === cell_id && i === selectedCells.length) pos = 'bottom';
  //   else if (cell.cell_id === cell_id && i > 0 && i < selectedCells.length + 1) pos = 'middle';
  //   else if (cell.cell_id === cell_id) pos = 'solo';
  // });
  const found = selectedCells.find((cell) => cell.cell_id === cell_id);

  return { isSelected: !!found };
};

export default useCell;
