import CreateCalendar from '@module/Planner/Calendar/CreateCalendar';
import CreateControls from '@module/Planner/Controls/CreateControls';
import { TemplateProps } from '@template/types';
import { useGetPlannerData } from 'app/api/planner/get';
import styles from './Planner.module.scss';

const Planner: React.FC<TemplateProps> = ({ ssProps }) => {
  const plannerData = useGetPlannerData(ssProps.planner);

  return (
    <div className={styles.page_planner}>
      <CreateControls plannerData={plannerData} />
      <CreateCalendar plannerData={plannerData} />
    </div>
  );
};

export default Planner;
