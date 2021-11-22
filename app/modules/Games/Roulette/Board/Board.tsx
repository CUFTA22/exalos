import styles from './Board.module.scss';
import clsx from 'clsx';

import Card from '@lib/Card/Card';
import Input from '@lib/Input/Input';
import Button from '@lib/Button/Button';

import { Dismiss24Regular, Star24Filled } from '@fluentui/react-icons';

import useRoulette from '../useRoulette';
import { betChangeOpts, betOptionsOpts, type2Color } from '../../../../utils/resources/boardData';
import Carousel from '../Carousel/Carousel';

const Board = () => {
  const { coins, setBetAmount, setBetColor, betAmount, betColor, startSpin, isLoading } =
    useRoulette();

  return (
    <Card className={styles.roulette_board}>
      <Carousel />

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

      <Button
        className={styles.spin_cta}
        size="large"
        width={220}
        text="SPIN"
        disabled={!betAmount || !betColor || isLoading}
        onClick={startSpin}
        isLoading={isLoading}
      />

      <div className={styles.bet_options}>
        {betOptionsOpts.map((opt) => (
          <Button
            key={opt.type}
            onClick={() => !isLoading && setBetColor(opt.type)}
            className={clsx(styles.bet_options_cta, {
              [styles.is_active]: betColor === type2Color[opt.type],
            })}
            type={opt.type}
            text={opt.text}
          />
        ))}
      </div>
    </Card>
  );
};

export default Board;
