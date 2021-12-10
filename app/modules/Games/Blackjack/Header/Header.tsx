import { ArrowClockwise16Regular, TicketHorizontal20Filled } from '@fluentui/react-icons';
import Typography from '@lib/Typography/Typography';
import useBlackjack from '../useBlackjack';
import styles from './Header.module.scss';

const Header = () => {
  const { coins, resetCoins } = useBlackjack();

  return (
    <div className={styles.blackjack_header}>
      <div className={styles.left}></div>
      <div className={styles.right}>
        <TicketHorizontal20Filled className={styles.right_star} />
        <Typography className={styles.coins} text={`${coins}`} color="secondary" />
        {!coins && <ArrowClockwise16Regular className={styles.right_reset} onClick={resetCoins} />}
      </div>
    </div>
  );
};

export default Header;
