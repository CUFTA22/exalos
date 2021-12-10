import { ArrowClockwise16Regular, TicketHorizontal20Filled } from '@fluentui/react-icons';
import Typography from '@lib/Typography/Typography';
import { RouletteProps } from '@template/Games/Roulette/types';
import History from '../History/History';
import useRoulette from '../useRoulette';
import styles from './Header.module.scss';

const Header: React.FC<RouletteProps> = ({ type }) => {
  const { coins, resetCoins } = useRoulette();

  return (
    <div className={styles.roulette_header}>
      <div className={styles.left}>
        <History type={type} />
      </div>
      <div className={styles.right}>
        <TicketHorizontal20Filled className={styles.right_star} />
        <Typography className={styles.coins} text={`${coins}`} color="secondary" />
        {!coins && <ArrowClockwise16Regular className={styles.right_reset} onClick={resetCoins} />}
      </div>
    </div>
  );
};

export default Header;
