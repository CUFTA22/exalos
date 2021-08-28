import PlannerColumn from '@element/PlannerColumn/PlannerColumn';
import PlannerWeek from '@element/PlannerWeek/PlannerWeek';
import { EyeShow24Regular } from '@fluentui/react-icons';
import Card from '@lib/Card/Card';
import FAB from '@lib/FAB/FAB';
import usePlannner from '../usePlanner';
import { transformWeekData } from '../utils';
import styles from './Calendar.module.scss';
import EmptyState from './EmptyState';
import { CalendarProps } from './types';

const CreateCalendar: React.FC<CalendarProps> = ({ plannerData }) => {
  const selectedWeek = plannerData?.calendar?.[0]?.week_id;

  if (!plannerData) return <EmptyState />;

  const renderCalendar = () => {
    const week = plannerData?.calendar?.find((week) => week.week_id === selectedWeek);
    const transformedWeek = transformWeekData(week);
    return transformedWeek.map((day) => <PlannerColumn key={day[0].cell_id} cells={day} />);
  };

  const renderWeeks = () => plannerData.calendar.map((week) => <PlannerWeek {...week} />);

  return (
    <Card className={styles.calendar}>
      <div className={styles.cells_container}>{renderCalendar()}</div>
      <div className={styles.weeks_container}>{renderWeeks()}</div>
    </Card>
  );
};

export default CreateCalendar;
