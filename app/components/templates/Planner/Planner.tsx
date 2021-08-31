import CreateCalendar from '@module/Planner/Calendar/CreateCalendar';
import CreateControls from '@module/Planner/Controls/CreateControls';
import usePlanner from '@module/Planner/usePlanner';
import { TemplateProps } from '@template/types';
import { useEffect } from 'react';
import styles from './Planner.module.scss';

const Planner: React.FC<TemplateProps> = ({ ssProps }) => {
  const { setSelectedWeek, setPlannerData } = usePlanner();

  useEffect(() => {
    // Set selected week to last one
    setPlannerData(ssProps.planner);
    setSelectedWeek(ssProps.planner.calendar[ssProps.planner.calendar.length - 1].week_id);
  }, []);

  return (
    <div className={styles.page_planner}>
      <CreateControls plannerData={ssProps.planner} />
      <CreateCalendar plannerData={ssProps.planner} />
    </div>
  );
};

export default Planner;
