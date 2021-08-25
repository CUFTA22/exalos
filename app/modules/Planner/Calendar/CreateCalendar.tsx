import { EyeShow24Regular } from '@fluentui/react-icons';
import Card from '@lib/Card/Card';
import FAB from '@lib/FAB/FAB';
import styles from './Calendar.module.scss';
import EmptyState from './EmptyState';
import { CalendarProps } from './types';

const CreateCalendar: React.FC<CalendarProps> = ({ plannerData }) => {
  if (!plannerData) return <EmptyState />;

  return (
    <Card className={styles.calendar}>
      <FAB Icon={EyeShow24Regular} />
    </Card>
  );
};

export default CreateCalendar;
