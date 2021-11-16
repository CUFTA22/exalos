import Button from '@lib/Button/Button';
import styles from './Board.module.scss';
import clsx from 'clsx';

const Board = () => {
  return (
    <div className={styles.roulette_board}>
      <div className={styles.numbers}>
        {Array.apply(null, Array(37)).map((_num, i) => {
          const color = 'red';

          return <div className={clsx(styles.num, `styles.num_${color}`)}>{i}</div>;
        })}
      </div>

      <div className={styles.pointer}></div>

      <Button className={styles.cta} text="Spin" />
    </div>
  );
};

export default Board;
