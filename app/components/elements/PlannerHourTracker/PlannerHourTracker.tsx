import usePlanner from '@module/Apps/Planner/usePlanner';
import styles from './PlannerHourTracker.module.scss';
import useTime from './utils/useTime';

const PlannerHourTracker = () => {
  const { top, left, width } = useTime();

  return (
    <div className={styles.planner_hour_tracker} style={{ top, left, width }}>
      <div className={styles.left_dot}></div>
    </div>
  );
};

export default PlannerHourTracker;
