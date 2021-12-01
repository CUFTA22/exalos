import styles from './Board.module.scss';
import Card from '@lib/Card/Card';
import Input from '@lib/Input/Input';
import {
  CollectionsAdd24Regular,
  Dismiss24Regular,
  Flag24Regular,
  HandLeft24Regular,
  Star24Filled,
} from '@fluentui/react-icons';
import useBlackjack from '../useBlackjack';
import Button from '@lib/Button/Button';
import Hand from '../Hand/Hand';
import { betActionsOpts, betChangeOpts } from '@utils/resources/blackjackBoardData';
import clsx from 'clsx';

const Board = () => {
  const {
    betAmount,
    isLoading,
    setBetAmount,
    coins,
    handPlayer,
    handHouse,
    startGame,
    handleHit,
    handleStand,
    handleSurrender,
    handleDoubleDown,
  } = useBlackjack();

  return (
    <Card className={styles.blackjack_board}>
      <div className={styles.hands}>
        <Hand title="House hand" cards={handHouse} />
        <Hand title="Your hand" cards={handPlayer} />
      </div>
      <div className={styles.controls}>
        <Input
          value={betAmount}
          icons_front={[<Star24Filled primaryFill="hsl(54, 88%, 77%)" />]}
          icons_back={[<Dismiss24Regular onClick={() => !isLoading && setBetAmount(0)} />]}
          placeholder="Bet amount"
          width="260px"
          disabled
        />

        <div className={styles.bet_change}>
          {betChangeOpts(coins).map((opt) => (
            <div
              key={opt.label}
              onClick={() => !isLoading && setBetAmount(opt.value)}
              className={styles.bet_change_opt}
            >
              {opt.label}
            </div>
          ))}
        </div>

        <div className={clsx(styles.action_buttons, { [styles.gap]: isLoading })}>
          {isLoading ? (
            <>
              {betActionsOpts(handleHit, handleStand, handleSurrender, handleDoubleDown).map(
                (btn) => (
                  <Button
                    className={styles.cta}
                    size="large"
                    width={180}
                    text={btn.text}
                    disabled={
                      btn.text !== 'Surrender' ? !betAmount : !betAmount || handPlayer.length > 2
                    }
                    Icon={btn.Icon}
                    onClick={btn.action}
                  />
                )
              )}
            </>
          ) : (
            <Button
              className={styles.cta}
              size="large"
              width={220}
              text="Deal"
              onClick={startGame}
              disabled={!betAmount}
              Icon={CollectionsAdd24Regular}
              isLoading={isLoading}
            />
          )}
        </div>
      </div>
    </Card>
  );
};

export default Board;
