import { Planner_Cell, Planner_Settings, Planner_Week } from '@ts/planner.types';
import dayjs from 'dayjs';

export const getDefaultSettings = (): Planner_Settings => ({
  start_time: '00',
  end_time: '24',
  include_weekends: true,
});

const generateCells = (): Planner_Cell[] => {
  let arr: Planner_Cell[] = [];
  Array.apply(null, Array(7 * 24)).map((_x: undefined, i: number) => {
    const cycle = Math.floor(i / 24);
    return arr.push({ cell_id: `d${cycle}_h${i - cycle * 24}`, task_id: '', text: '', type: '' });
  });
  return arr;
};

export const getInitCalendar = (): Planner_Week[] => {
  const data: Planner_Week = {
    week_id: dayjs().startOf('week').format('DD.MM.YY'), // 12.08.21
    cells: generateCells(),
  };

  return [data];
};
