import CreateCalendar from '@module/Planner/Calendar/CreateCalendar';
import CreateControls from '@module/Planner/Controls/CreateControls';
import styles from './Planner.module.scss';

const Planner = () => {
  return (
    <div className={styles.page_planner}>
      <CreateControls />
      <CreateCalendar />
    </div>
  );
};

export default Planner;
