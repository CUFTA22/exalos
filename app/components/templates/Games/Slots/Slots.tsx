import Board from '@module/Games/Slots/Board/Board';
import Header from '@module/Games/Slots/Header/Header';
import classes from './Slots.module.scss';

const Slots: React.FC = () => {
  return (
    <div className={classes.page_slots}>
      <Header />

      <div className={classes.game_container}>
        <Board />
      </div>
    </div>
  );
};

export default Slots;
