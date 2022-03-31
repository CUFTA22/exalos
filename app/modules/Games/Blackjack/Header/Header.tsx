import { ArrowClockwise16Regular, TicketHorizontal20Filled } from '@fluentui/react-icons';
import Typography from '@lib/Typography/Typography';
import useBlackjack from '../useBlackjack';
import classes from './Header.module.scss';

const Header = () => {
  const { coins, resetCoins } = useBlackjack();

  return (
    <div className={classes.blackjack_header}>
      <div className={classes.left}></div>
      <div className={classes.right}>
        <TicketHorizontal20Filled className={classes.right_star} />
        <Typography className={classes.coins} text={`${coins}`} color="secondary" />
        {!coins && <ArrowClockwise16Regular className={classes.right_reset} onClick={resetCoins} />}
      </div>
    </div>
  );
};

export default Header;
