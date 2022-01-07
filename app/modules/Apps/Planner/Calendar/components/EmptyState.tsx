import { CalendarLtr24Regular } from '@fluentui/react-icons';
import Button from '@lib/Button/Button';
import Card from '@lib/Card/Card';
import useNotification from '@module/Notifications/useNotification';
import usePlannerInit from 'app/api/planner/post';
import styles from '../Calendar.module.scss';

const EmptyState = () => {
  const { isLoading, init } = usePlannerInit();
  const { notify } = useNotification();

  const handleInit = async () => {
    await init();
    notify({ type: 'info', message: 'Planner init!' });
  };

  return (
    <Card className={styles.calendar}>
      <Button
        onClick={handleInit}
        isLoading={isLoading}
        text="Initialize Planner"
        Icon={CalendarLtr24Regular}
      />
    </Card>
  );
};

export default EmptyState;
