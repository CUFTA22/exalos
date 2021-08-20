import { Planner_Cell, Planner_Type } from '@ts/planner.types';

export interface Planner_Updates {
  selectedCells: Planner_Cell[];
  updateSelectedCells: (action: 'add' | 'remove', cell: Planner_Cell) => void;
  updateCellsData: (data: Planner_Cell) => void;
  updateVisibleTypes: (action: 'add' | 'remove', type: Planner_Type) => void;
  updateTypesData: (data: Planner_Type) => void;
}
