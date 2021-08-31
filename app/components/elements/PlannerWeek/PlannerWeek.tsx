import styles from './PlannerWeek.module.scss';
import { Planner_Week } from '@ts/planner.types';
import usePlanner from '@module/Planner/usePlanner';
import clsx from 'clsx';
import { Dismiss12Regular } from '@fluentui/react-icons';

const PlannerWeek: React.FC<Planner_Week> = ({ week_id }) => {
  const { selectedWeek, setSelectedWeek } = usePlanner();
  const isSelected = selectedWeek === week_id;

  return (
    <div
      className={clsx(styles.planner_week, { [styles.active]: isSelected })}
      onClick={() => setSelectedWeek(week_id)}
    >
      {week_id}
      <Dismiss12Regular primaryFill="hsl(0, 88%, 77%)" className={styles.remove_week} />
    </div>
  );
};

export default PlannerWeek;
