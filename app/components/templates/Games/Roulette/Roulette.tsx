import Board from '@module/Games/Roulette/Board/Board';
import Chat from '@module/Games/Roulette/Chat/Chat';
import Header from '@module/Games/Roulette/Header/Header';
import styles from './Roulette.module.scss';
import { RouletteProps } from './types';

const Roulette: React.FC<RouletteProps> = ({ type }) => {
  return (
    <div className={styles.page_roulette}>
      <Header type={type} />

      <div className={styles.game_container}>
        <Board type={type} />
        <Chat />
      </div>
    </div>
  );
};

export default Roulette;
