import Board from '@module/Games/Roulette/Board/Board';
import Chat from '@module/Games/Roulette/Chat/Chat';
import Header from '@module/Games/Roulette/Header/Header';
import styles from './Roulette.module.scss';

const Roulette = () => {
  return (
    <div className={styles.page_roulette}>
      <Header />

      <div className={styles.game_container}>
        <Board />
        <Chat />
      </div>
    </div>
  );
};

export default Roulette;
