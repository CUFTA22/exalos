import PlannerColumn from '@element/PlannerColumn/PlannerColumn';
import PlannerWeek from '@element/PlannerWeek/PlannerWeek';
import { Add12Regular } from '@fluentui/react-icons';
import Card from '@lib/Card/Card';
import usePlanner from '../usePlanner';
import { transformWeekData } from '../utils';
import styles from './Calendar.module.scss';
import EmptyState from './components/EmptyState';
import { CalendarProps } from './types';

const CreateCalendar: React.FC<CalendarProps> = ({ plannerData }) => {
  const { selectedWeek } = usePlanner();

  if (!plannerData) return <EmptyState />;

  const { start_time, end_time } = plannerData?.settings;

  const renderCalendar = () => {
    if (!selectedWeek) return;
    const week = plannerData?.calendar?.find((week) => week.week_id === selectedWeek);
    const transformedWeek = transformWeekData(week, start_time, end_time);
    return transformedWeek.map((day) => <PlannerColumn key={day[0].cell_id} cells={day} />);
  };

  const renderWeeks = () =>
    plannerData.calendar.map((week) => <PlannerWeek key={week.week_id} {...week} />);

  return (
    <Card className={styles.calendar}>
      <div className={styles.cells_container}>{renderCalendar()}</div>
      <div className={styles.weeks_container}>
        {renderWeeks()}
        <Add12Regular primaryFill="hsl(128, 88%, 77%)" className={styles.add_week} />
      </div>
    </Card>
  );
};

export default CreateCalendar;
