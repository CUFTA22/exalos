import usePlanner from '@module/Apps/Planner/usePlanner';
import clsx from 'clsx';
import dayjs from 'dayjs';
import styles from './Day.module.scss';

const DAYS = {
  '0': 'Monday',
  '1': 'Tuesday',
  '2': 'Wednesday',
  '3': 'Thursday',
  '4': 'Friday',
  '5': 'Saturday',
  '6': 'Sunday',
};
const transformWeek = (str: string) => `20${str.substr(6)}-${str.substr(3, 2)}-${str.substr(0, 2)}`;

const Day = ({ index }) => {
  const { selectedWeek } = usePlanner();

  const date = dayjs(transformWeek(selectedWeek)).add(index, 'day').format('D').toString();
  const isToday = date === dayjs().format('D').toString();

  return (
    <div className={clsx(styles.display_day, { [styles.is_today]: isToday })}>
      <span className={styles.date}>{date}</span>
      <span>{DAYS[index]}</span>
    </div>
  );
};

export default Day;
