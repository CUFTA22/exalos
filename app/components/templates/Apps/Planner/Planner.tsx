import useEventListener from '@hooks/useEventListener';
import PlannerCalendar from '@module/Apps/Planner/Calendar/PlannerCalendar';
import PlannerControls from '@module/Apps/Planner/Controls/PlannerControls';
import usePlanner from '@module/Apps/Planner/usePlanner';
import { TemplateProps } from '@template/types';
import { useEffect } from 'react';
import styles from './Planner.module.scss';

const Planner: React.FC<TemplateProps> = ({ ssProps }) => {
  const { initializeState, plannerData, selectedCells, handleChangeCellOnKey } = usePlanner();

  useEffect(() => {
    initializeState(ssProps.planner);
  }, []);

  // Changes selected cell
  useEventListener('keydown', handleChangeCellOnKey);

  return (
    <div className={styles.page_planner}>
      <PlannerControls plannerData={plannerData || ssProps.planner} />
      <PlannerCalendar plannerData={plannerData || ssProps.planner} />
    </div>
  );
};

export default Planner;
