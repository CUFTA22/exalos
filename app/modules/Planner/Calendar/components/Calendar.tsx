import PlannerColumn from '@element/PlannerColumn/PlannerColumn';
import usePlanner from '@module/Planner/usePlanner';
import { transformWeekData } from '@module/Planner/utils';
import { Planner_Data } from '@ts/planner.types';

interface Props {
  plannerData: Planner_Data;
}

const Calendar: React.FC<Props> = ({ plannerData }) => {
  const { selectedWeek } = usePlanner();

  const renderCalendar = () => {
    if (!selectedWeek) return;
    const week = plannerData?.calendar?.find((week) => week.week_id === selectedWeek);
    const transformedWeek = transformWeekData(week, plannerData?.settings);
    return transformedWeek.map((day) => <PlannerColumn key={day[0].cell_id} cells={day} />);
  };

  return <>{renderCalendar()}</>;
};

export default Calendar;
