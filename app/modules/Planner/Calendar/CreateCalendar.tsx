import PlannerColumn from '@element/PlannerColumn/PlannerColumn';
import PlannerWeek from '@element/PlannerWeek/PlannerWeek';
import Card from '@lib/Card/Card';
import { transformWeekData } from '../utils';
import styles from './Calendar.module.scss';
import EmptyState from './components/EmptyState';
import { CalendarProps } from './types';

const CreateCalendar: React.FC<CalendarProps> = ({ plannerData }) => {
  if (!plannerData) return <EmptyState />;

  const selectedWeek = plannerData?.calendar?.[0]?.week_id;
  const { start_time, end_time } = plannerData?.settings;

  const renderCalendar = () => {
    const week = plannerData?.calendar?.find((week) => week.week_id === selectedWeek);
    const transformedWeek = transformWeekData(week, start_time, end_time);
    return transformedWeek.map((day) => <PlannerColumn key={day[0].cell_id} cells={day} />);
  };

  const renderWeeks = () =>
    plannerData.calendar.map((week) => <PlannerWeek key={week.week_id} {...week} />);

  return (
    <Card className={styles.calendar}>
      <div className={styles.cells_container}>{renderCalendar()}</div>
      <div className={styles.weeks_container}>{renderWeeks()}</div>
    </Card>
  );
};

export default CreateCalendar;
