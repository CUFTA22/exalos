import CreateCalendar from '@module/Planner/Calendar/CreateCalendar';
import CreateControls from '@module/Planner/Controls/CreateControls';
import usePlannner from '@module/Planner/usePlanner';
import { TemplateProps } from '@template/types';
import styles from './Planner.module.scss';

const Planner: React.FC<TemplateProps> = ({ ssProps }) => {
  // Initialize data
  usePlannner(ssProps.planner);

  return (
    <div className={styles.page_planner}>
      <CreateControls />
      <CreateCalendar />
    </div>
  );
};

export default Planner;
