import classes from './History.module.scss';
import RouletteNumber from '@element/RouletteNumber/RouletteNumber';
import { rouletteEuNumbers, rouletteUsNumbers } from '@utils/resources/rouletteNumbers';
import useRoulette from '../useRoulette';
import { RouletteProps } from '@template/Games/Roulette/types';

const History: React.FC<RouletteProps> = ({ type }) => {
  const { history } = useRoulette();

  const numbers = type === 'eu' ? rouletteEuNumbers : rouletteUsNumbers;

  return (
    <div className={classes.roulette_history}>
      {history.slice(-14).map((val, i) => (
        <RouletteNumber
          key={i}
          n={val.toString()}
          c={numbers.find((no) => parseInt(no.n) === val).c}
          size="small"
        />
      ))}
    </div>
  );
};

export default History;
