import CreateCalendar from '@module/Planner/Calendar/CreateCalendar';
import CreateControls from '@module/Planner/Controls/CreateControls';
import usePlanner from '@module/Planner/usePlanner';
import { TemplateProps } from '@template/types';
import { useEffect } from 'react';
import styles from './Planner.module.scss';

const Planner: React.FC<TemplateProps> = ({ ssProps }) => {
  const { initializeState, plannerData } = usePlanner();

  useEffect(() => {
    initializeState(ssProps.planner);
  }, []);

  return (
    <div className={styles.page_planner}>
      <CreateControls plannerData={ssProps.planner || plannerData} />
      <CreateCalendar plannerData={ssProps.planner || plannerData} />
    </div>
  );
};

export default Planner;
