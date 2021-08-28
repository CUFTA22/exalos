import styles from './PlannerWeek.module.scss';
import { Planner_Week } from '@ts/planner.types';

const PlannerWeek: React.FC<Planner_Week> = ({ week_id }) => {
  return <div className={styles.planner_week}>{week_id}</div>;
};

export default PlannerWeek;
