import PlannerHourTracker from '@element/PlannerHourTracker/PlannerHourTracker';
import Card from '@lib/Card/Card';
import classes from './Calendar.module.scss';
import Calendar from './components/Calendar';
import Days from './components/Days';
import EmptyState from './components/EmptyState';
import Weeks from './components/Weeks';
import { CalendarProps } from './types';

const CreateCalendar: React.FC<CalendarProps> = ({ plannerData }) => {
  if (!plannerData) return <EmptyState />;

  return (
    <Card className={classes.calendar}>
      <div className={classes.days_container}>
        <Days plannerData={plannerData} />
      </div>

      <div className={classes.cells_container}>
        <div className={classes.content_container}>
          <Calendar plannerData={plannerData} />
          <PlannerHourTracker />
        </div>
      </div>
      <div className={classes.weeks_container}>
        <Weeks plannerData={plannerData} addClassName={classes.add_week} />
      </div>
    </Card>
  );
};

export default CreateCalendar;
