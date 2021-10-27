import usePlanner from '@module/Planner/usePlanner';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

// ---------------------------------------------------------------------------------
// util functions
// ---------------------------------------------------------------------------------

const getTime = () => dayjs().format('HHmm');
const fixTime = (time: string) => parseInt(`${time.substr(0, 2)}${concertMins(time.substr(2, 2))}`);

const concertMins = (minutes: string) => {
  const mins = (parseInt(minutes) / 0.6).toFixed(0);
  return mins.length === 1 ? `0${mins}` : mins;
};

const calcPrecentage = (min: string, max: string, value: string) =>
  `${((fixTime(value) - parseInt(min)) / (parseInt(max) - parseInt(min))) * 100}%`;

// ---------------------------------------------------------------------------------
// useTime - returns top position of a hour tracker
// ---------------------------------------------------------------------------------

const useTime = () => {
  const { plannerData } = usePlanner();
  const start_time = plannerData?.settings?.start_time;
  const end_time = plannerData?.settings?.end_time;
  const include_weekends = plannerData?.settings?.include_weekends;
  const yesterday = dayjs().subtract(1, 'day').day().toString();

  const [now, setNow] = useState(getTime());

  useEffect(() => {
    const intervalId = setInterval(() => setNow(getTime()), 10000);
    return () => clearInterval(intervalId);
  }, [setInterval, clearInterval, setNow, getTime]);

  let top = calcPrecentage(`${start_time}00`, `${end_time}00`, now);
  let left = calcPrecentage('0', include_weekends ? '7' : '5', yesterday);
  const width = include_weekends ? '14.286%' : '20%';

  if (now < start_time) top = '0%';
  if (now > end_time) top = '100%';

  return { left, top, width };
};

export default useTime;
