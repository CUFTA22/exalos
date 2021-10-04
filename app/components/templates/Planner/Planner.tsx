import useEventListener from '@hooks/useEventListener';
import CreateCalendar from '@module/Planner/Calendar/CreateCalendar';
import CreateControls from '@module/Planner/Controls/CreateControls';
import usePlanner from '@module/Planner/usePlanner';
import { TemplateProps } from '@template/types';
import { useEffect } from 'react';
import styles from './Planner.module.scss';

const Planner: React.FC<TemplateProps> = ({ ssProps }) => {
  const { initializeState, plannerData, handleChangeCellOnKey } = usePlanner();

  useEffect(() => {
    initializeState(ssProps.planner);
  }, []);

  // Changes selected cell
  useEventListener('keydown', handleChangeCellOnKey);

  return (
    <div className={styles.page_planner}>
      <CreateControls plannerData={plannerData || ssProps.planner} />
      <CreateCalendar plannerData={plannerData || ssProps.planner} />
    </div>
  );
};

export default Planner;
