import useTasks from '@module/Tasks/useTasks';
import { TemplateProps } from '@template/types';
import { useEffect } from 'react';
import styles from './Tasks.module.scss';

const Tasks: React.FC<TemplateProps> = ({ ssProps }) => {
  const { initializeState, tasksData } = useTasks();

  useEffect(() => {
    initializeState(ssProps.tasks);
  }, []);

  return <div className={styles.page_planner}>{/* Map collections */}</div>;
};

export default Tasks;
