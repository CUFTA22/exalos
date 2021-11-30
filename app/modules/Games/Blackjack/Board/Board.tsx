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
import { betChangeOpts } from '@utils/resources/boardData';
import Button from '@lib/Button/Button';
import Hand from '../Hand/Hand';

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

        {isLoading ? (
          <>
            <Button
              className={styles.cta}
              size="large"
              width={220}
              text="Hit"
              disabled={!betAmount}
              Icon={CollectionsAdd24Regular}
              onClick={handleHit}
            />
            <Button
              className={styles.cta}
              size="large"
              width={220}
              text="Stand"
              disabled={!betAmount}
              Icon={HandLeft24Regular}
              onClick={handleStand}
            />
            <Button
              className={styles.cta}
              size="large"
              width={220}
              text="Surrender"
              disabled={!betAmount || handPlayer.length > 2}
              Icon={Flag24Regular}
              onClick={handleSurrender}
            />
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
    </Card>
  );
};

export default Board;
