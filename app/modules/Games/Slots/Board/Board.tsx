import classes from './Board.module.scss';
import Card from '@lib/Card/Card';
import Input from '@lib/Input/Input';
import { Dismiss24Regular, TicketHorizontal24Filled } from '@fluentui/react-icons';
import useSlots from '../useSlots';
import Button from '@lib/Button/Button';
import { betChangeOpts } from '@utils/resources/slotsBoardData';
import clsx from 'clsx';

const Board = () => {
  const { betAmount, isLoading, setBetAmount, coins, history, startGame } = useSlots();

  return (
    <Card className={classes.blackjack_board}>
      <div className={classes.main}>Slots</div>

      <div className={classes.controls}>
        <Input
          value={betAmount}
          icons_front={[<TicketHorizontal24Filled primaryFill="hsl(128, 88%, 77%)" />]}
          icons_back={[<Dismiss24Regular onClick={() => !isLoading && setBetAmount(0)} />]}
          placeholder="Bet amount"
          width="260px"
          disabled
        />

        <div className={classes.bet_change}>
          {betChangeOpts(coins).map((opt) => (
            <div
              key={opt.label}
              onClick={() => !isLoading && setBetAmount(opt.value)}
              className={classes.bet_change_opt}
            >
              {opt.label}
            </div>
          ))}
        </div>

        <div className={clsx(classes.action_buttons, { [classes.gap]: isLoading })}>
          <Button
            className={classes.cta}
            size="large"
            width={180}
            text="Spin"
            disabled={isLoading}
            // Icon={}
            onClick={startGame}
          />
        </div>
      </div>
    </Card>
  );
};

export default Board;
