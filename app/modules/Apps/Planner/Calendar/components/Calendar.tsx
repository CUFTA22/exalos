import PlannerColumn from '@element/PlannerColumn/PlannerColumn';
import usePlanner from '@module/Apps/Planner/usePlanner';
import { transformWeekData } from '@module/Apps/Planner/utils';
import { Planner_Data } from '@ts/planner.types';

interface Props {
  plannerData: Planner_Data;
}

const Calendar: React.FC<Props> = ({ plannerData }) => {
  const { selectedWeek } = usePlanner();

  const renderCalendar = () => {
    let fixWeek = selectedWeek || plannerData?.calendar[0]?.week_id;
    if (!fixWeek) return;

    const week = plannerData?.calendar?.find((week) => week.week_id === fixWeek);

    const transformedWeek = transformWeekData(week, plannerData?.settings);
    return transformedWeek.map((day) => <PlannerColumn key={day[0].cell_id} cells={day} />);
  };

  return <>{renderCalendar()}</>;
};

export default Calendar;
