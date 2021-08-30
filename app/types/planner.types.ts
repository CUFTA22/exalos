export interface Planner_Cell {
  cell_id: string; // Auto-genereted + unique - d2_h5 ?
  task_id: string; // ID for task to populate and get completed ?
  text: string;
  type: string; // If type is deleted also clear in DB
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
  user_email: string; // || user_id
  types: Planner_Type[];
  calendar: Planner_Week[];
  settings: Planner_Settings;
}

// Types - color labels for cells

export interface Planner_Type {
  _id?: string;
  name: string;
  color: string; // rgb value ?
}
