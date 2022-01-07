import { Tasks_Data } from '@ts/tasks.types';
import useFetch from 'app/api/useFetch';
import { TasksContext } from 'app/store/tasks/CTX';
import { useContext } from 'react';

const useTasks = () => {
  const { tasksData, dispatch } = useContext(TasksContext);
  const fetch = useFetch();

  // --------------------------------------------------------------------------------------------
  // Set Planner Data - initial
  // --------------------------------------------------------------------------------------------

  const setTasksData = (data: Tasks_Data) => dispatch({ type: 'TASKS_DATA_SET', payload: data });

  const initializeState = (tasks: Tasks_Data) => {
    // Set initial plannerData & selected week to last one
    setTasksData(tasks);
  };

  return { tasksData, initializeState };
};

export default useTasks;
