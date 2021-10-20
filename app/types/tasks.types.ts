import { ObjectId } from 'mongoose';
import { Dispatch } from 'react';

export interface Tasks_Task {
  _id?: ObjectId;
  name: string; // used as unique id
  description: string;
  //   checklist: string[];
}

export interface Tasks_Collection {
  _id?: ObjectId;
  name: string; // used as unique id
  tasks: Tasks_Task[];
}

export interface Tasks_Data {
  user_email: string; // used as unique id
  collections: Tasks_Collection[];
}

// -----------------------------------------------------------------
// For planner context
// -----------------------------------------------------------------

export type Tasks_Context_Action = { type: 'TASKS_DATA_SET'; payload: Tasks_Data };

export interface Tasks_Context {
  tasksData: Tasks_Data;
  dispatch: Dispatch<Tasks_Context_Action>;
}
