import PlannerWeek from '@element/PlannerWeek/PlannerWeek';
import { Add12Regular } from '@fluentui/react-icons';
import { Planner_Data } from '@ts/planner.types';
import useAddWeek from 'app/api/planner/week/post';

interface Props {
  plannerData: Planner_Data;
  addClassName: string;
}

const Weeks: React.FC<Props> = ({ plannerData, addClassName }) => {
  const { addWeek } = useAddWeek();

  const renderWeeks = () =>
    plannerData.calendar.map((week) => <PlannerWeek key={week.week_id} {...week} />);

  return (
    <>
      {renderWeeks()}
      <Add12Regular onClick={addWeek} primaryFill="hsl(128, 88%, 77%)" className={addClassName} />
    </>
  );
};

export default Weeks;
