import classes from './ErrorCode.module.scss';
import Card from '@lib/Card/Card';
import Typography from '@lib/Typography/Typography';
import GameOfLife from '../../shared/Life/Life';

interface Props {
  code: 404 | 401;
}

const CODE_MESSAGE = {
  404: 'Page not Found',
  401: 'Unauthorized',
};

const ErrorCode: React.FC<Props> = ({ code }) => {
  return (
    <div className={classes.custom404}>
      <GameOfLife />
      <Card className={classes.center}>
        <Typography text={`${code} | ${CODE_MESSAGE[code]}`} fSize={42} fWeight={500} />
      </Card>
    </div>
  );
};

export default ErrorCode;
