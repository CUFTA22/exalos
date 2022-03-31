import useTasks from '@module/Apps/Tasks/useTasks';
import { TemplateProps } from '@template/types';
import { useEffect } from 'react';
import classes from './Tasks.module.scss';

const Tasks: React.FC<TemplateProps> = ({ ssProps }) => {
  const { initializeState, tasksData } = useTasks();

  useEffect(() => {
    initializeState(ssProps.tasks);
  }, []);

  return <div className={classes.page_tasks}>{/* Map collections */}</div>;
};

export default Tasks;
