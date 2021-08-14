export interface Planner_Cell {
  cell_id: string; // Auto-genereted + unique - d2_h5 ?
  task_id: string; // ID for task to populate and get completed ?
  text: string;
  type: string; // If type is deleted also clear in DB
}

export interface Planner_Week {
  week_id: string; // Auto-genereted + unique - 12.08.21 ?
  start_date: string;
  cells: Planner_Cell[];
}

export interface Planner_Data {
  _id: string;
  user_id: string;
  types: Planner_Type[];
  calendar: Planner_Week[];
  settings: {
    start_time: '00AM' | '01AM' | '02AM' | '03AM' | '04AM' | '05AM' | '06AM' | '07AM' | '08AM';
    end_time: '20PM' | '21PM' | '22PM' | '23PM' | '24PM'; // Adjust depending on dayjs
    include_weekends: boolean;
  };
}

// Types - color labels for cells

export interface Planner_Type {
  name: string;
  color: string; // rgb value ?
}
