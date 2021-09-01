import { Dispatch } from 'react';

export interface Planner_Cell {
  cell_id: string; // Auto-genereted + unique - d2_h5 ?
  task_id: string; // ID for task to populate and get completed ?
  text: string;
  type: string; // If type is deleted also clear in DB
  meet_url: string;
}

export interface Planner_Week {
  week_id: string; // Auto-genereted + unique - 12.08.21 ?
  cells: Planner_Cell[];
}

export interface Planner_Settings {
  start_time: '00' | '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10';
  end_time: '20' | '21' | '22' | '23' | '24';
  include_weekends: boolean;
}

export interface Planner_Data {
  user_email: string; // used as unique id
  types: Planner_Type[];
  calendar: Planner_Week[];
  settings: Planner_Settings;
}

// Types - color labels for cells

export interface Planner_Type {
  _id?: string; // _id for updating DB
  name: string;
  color: string; // rgb value ?
}

// -----------------------------------------------------------------
// For usePlanner
// -----------------------------------------------------------------

export interface Planner_Updates {
  plannerData: Planner_Data;
  setPlannerData: (data: Planner_Data) => void;
  selectedCells: Planner_Cell[];
  updateSelectedCells: (
    action: 'SELECTED_CELL_ADD' | 'SELECTED_CELL_REMOVE',
    cell: Planner_Cell
  ) => void;
  updateCellsData: (cell_id: string, data: Planner_Cell_Updates) => void;
  updateVisibleTypes: (
    action: 'VISIBLE_TYPES_ADD' | 'VISIBLE_TYPES_REMOVE',
    type: Planner_Type
  ) => void;
  updateTypesData: (data: Planner_Type) => void;
  selectedWeek: string;
  setSelectedWeek: (week: string) => void;
}

// For updates

export interface Planner_Cell_Updates {
  cell_id?: string;
  task_id?: string;
  text?: string;
  type?: string;
  meet_url?: string;
}

// -----------------------------------------------------------------
// For planner context
// -----------------------------------------------------------------

export type Planner_Context_Action =
  | { type: 'SELECTED_CELL_ADD'; payload: Planner_Cell }
  | { type: 'SELECTED_CELL_REMOVE'; payload: Planner_Cell }
  | { type: 'VISIBLE_TYPES_ADD'; payload: Planner_Type }
  | { type: 'VISIBLE_TYPES_REMOVE'; payload: Planner_Type }
  | { type: 'SELECTED_WEEK_SET'; payload: string }
  | { type: 'PLANNER_DATA_SET'; payload: Planner_Data };

export interface Planner_Context {
  plannerData: Planner_Data;
  visibleTypes: Planner_Type[];
  selectedCells: Planner_Cell[];
  selectedWeek: string;
  dispatch: Dispatch<Planner_Context_Action>;
}
