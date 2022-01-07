import Board from '@module/Games/Slots/Board/Board';
import Header from '@module/Games/Slots/Header/Header';
import styles from './Slots.module.scss';

const Slots: React.FC = () => {
  return (
    <div className={styles.page_slots}>
      <Header />

      <div className={styles.game_container}>
        <Board />
      </div>
    </div>
  );
};

export default Slots;
