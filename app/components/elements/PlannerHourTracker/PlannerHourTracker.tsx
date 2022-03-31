import usePlanner from '@module/Apps/Planner/usePlanner';
import classes from './PlannerHourTracker.module.scss';
import useTime from './utils/useTime';

const PlannerHourTracker = () => {
  const { top, left, width } = useTime();

  return (
    <div className={classes.planner_hour_tracker} style={{ top, left, width }}>
      <div className={classes.left_dot}></div>
    </div>
  );
};

export default PlannerHourTracker;
