import usePlanner from '@module/Planner/usePlanner';
import { transformWeekData } from '@module/Planner/utils';
import React from 'react';

interface Props {
  cell_id: string;
  className: string;
}

const selectDay = {
  '0': 'Monday',
  '1': 'Tuesday',
  '2': 'Wednesday',
  '3': 'Thursday',
  '4': 'Friday',
  '5': 'Saturday',
  '6': 'Sunday',
};

const CellDay: React.FC<Props> = ({ cell_id, className }) => {
  const { plannerData } = usePlanner();

  const firstHour = plannerData.calendar[0].cells[0].cell_id.substr(4);

  return (
    <>
      {cell_id.substr(4) === firstHour && (
        <div className={className}>{selectDay[cell_id.substr(1, 1)]}</div>
      )}
    </>
  );
};

export default CellDay;
