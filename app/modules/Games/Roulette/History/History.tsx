import styles from './History.module.scss';
import RouletteNumber from '@element/RouletteNumber/RouletteNumber';
import { rouletteNumbers } from '@utils/resources/rouletteNumbers';
import useRoulette from '../useRoulette';

const History = () => {
  const { history } = useRoulette();

  return (
    <div className={styles.roulette_history}>
      {history.slice(-14).map((val, i) => (
        <RouletteNumber
          key={i}
          n={val}
          c={rouletteNumbers.find((no) => no.n === val).c}
          size="small"
        />
      ))}
    </div>
  );
};

export default History;
