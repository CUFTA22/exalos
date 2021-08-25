import styles from './Custom404.module.scss';
import Card from '@lib/Card/Card';
import Typography from '@lib/Typography/Typography';
import GameOfLife from '../../shared/Life/Life';

const Error = ({ statusCode }: { statusCode?: number }) => {
  const message = statusCode ? `${statusCode} | error on server` : 'An error occurred on client';

  return (
    <div className={styles.error}>
      <GameOfLife />
      <Card className={styles.center}>
        <Typography text={message} color="hsl(206, 88%, 77%)" fSize={38} fWeight={500} />
      </Card>
    </div>
  );
};

export default Error;
