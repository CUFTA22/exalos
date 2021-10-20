import { Tasks_Context, Tasks_Context_Action } from '@ts/tasks.types';

const noop = () => false;

export const initialState: Tasks_Context = {
  tasksData: null,
  dispatch: noop,
};

export const tasksReducer = (state: Tasks_Context, action: Tasks_Context_Action): Tasks_Context => {
  switch (action.type) {
    case 'TASKS_DATA_SET':
      return { ...state, tasksData: action.payload };
    default:
      return state;
  }
};
