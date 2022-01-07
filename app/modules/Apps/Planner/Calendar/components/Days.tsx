import { Planner_Data } from '@ts/planner.types';
import Day from './Day';

interface Props {
  plannerData: Planner_Data;
}

const Days: React.FC<Props> = ({ plannerData }) => {
  const renderDays = () => {
    const noOfDays = Array.apply(null, Array(plannerData.settings.include_weekends ? 7 : 5));

    return noOfDays.map((_, i) => <Day key={i} index={i} />);
  };

  return <>{renderDays()}</>;
};

export default Days;
