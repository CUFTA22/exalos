import classes from './Custom404.module.scss';
import Card from '@lib/Card/Card';
import Typography from '@lib/Typography/Typography';
import GameOfLife from '../../shared/Life/Life';

const Custom404 = () => {
  return (
    <div className={classes.custom404}>
      <GameOfLife />
      <Card className={classes.center}>
        <Typography text="404 | Page Not Found" fSize={42} fWeight={500} />
      </Card>
    </div>
  );
};

export default Custom404;
