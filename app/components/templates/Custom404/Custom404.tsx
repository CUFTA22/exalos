import styles from './Custom404.module.scss';
import Card from '@lib/Card/Card';
import Typography from '@lib/Typography/Typography';
import GameOfLife from '../../shared/Life/Life';

const Custom404 = () => {
  return (
    <div className={styles.custom404}>
      <GameOfLife />
      <Card className={styles.center}>
        <Typography
          text="404 | Page Not Found"
          color="hsl(206, 88%, 77%)"
          fSize={42}
          fWeight={500}
        />
      </Card>
    </div>
  );
};

export default Custom404;
