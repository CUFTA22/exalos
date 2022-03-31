import { ArrowClockwise16Regular, TicketHorizontal20Filled } from '@fluentui/react-icons';
import Typography from '@lib/Typography/Typography';
import { RouletteProps } from '@template/Games/Roulette/types';
import History from '../History/History';
import useRoulette from '../useRoulette';
import classes from './Header.module.scss';

const Header: React.FC<RouletteProps> = ({ type }) => {
  const { coins, resetCoins } = useRoulette();

  return (
    <div className={classes.roulette_header}>
      <div className={classes.left}>
        <History type={type} />
      </div>
      <div className={classes.right}>
        <TicketHorizontal20Filled className={classes.right_star} />
        <Typography className={classes.coins} text={`${coins}`} color="secondary" />
        {!coins && <ArrowClockwise16Regular className={classes.right_reset} onClick={resetCoins} />}
      </div>
    </div>
  );
};

export default Header;
