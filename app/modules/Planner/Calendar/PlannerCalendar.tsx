import PlannerHourTracker from '@element/PlannerHourTracker/PlannerHourTracker';
import Card from '@lib/Card/Card';
import styles from './Calendar.module.scss';
import Calendar from './components/Calendar';
import Days from './components/Days';
import EmptyState from './components/EmptyState';
import Weeks from './components/Weeks';
import { CalendarProps } from './types';

const CreateCalendar: React.FC<CalendarProps> = ({ plannerData }) => {
  if (!plannerData) return <EmptyState />;

  return (
    <Card className={styles.calendar}>
      <div className={styles.days_container}>
        <Days plannerData={plannerData} />
      </div>

      <div className={styles.cells_container}>
        <div className={styles.content_container}>
          <Calendar plannerData={plannerData} />
          <PlannerHourTracker />
        </div>
      </div>
      <div className={styles.weeks_container}>
        <Weeks plannerData={plannerData} addClassName={styles.add_week} />
      </div>
    </Card>
  );
};

export default CreateCalendar;
