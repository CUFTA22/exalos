import { EyeShow24Regular } from '@fluentui/react-icons';
import Card from '@lib/Card/Card';
import FAB from '@lib/FAB/FAB';
import styles from './Calendar.module.scss';

const CreateCalendar = () => {
  return (
    <Card className={styles.calendar}>
      <FAB Icon={EyeShow24Regular} />
    </Card>
  );
};

export default CreateCalendar;
