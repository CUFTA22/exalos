import Card from '@lib/Card/Card';
import styles from './Calendar.module.scss';
import Calendar from './components/Calendar';
import EmptyState from './components/EmptyState';
import Weeks from './components/Weeks';
import { CalendarProps } from './types';

const CreateCalendar: React.FC<CalendarProps> = ({ plannerData }) => {
  if (!plannerData) return <EmptyState />;

  return (
    <Card className={styles.calendar}>
      <div className={styles.cells_container}>
        <Calendar plannerData={plannerData} />
      </div>
      <div className={styles.weeks_container}>
        <Weeks plannerData={plannerData} addClassName={styles.add_week} />
      </div>
    </Card>
  );
};

export default CreateCalendar;
