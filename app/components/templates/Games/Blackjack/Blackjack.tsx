import Board from '@module/Games/Blackjack/Board/Board';
import Header from '@module/Games/Blackjack/Header/Header';
import classes from './Blackjack.module.scss';

const Blackjack: React.FC = () => {
  return (
    <div className={classes.page_blackjack}>
      <Header />

      <div className={classes.game_container}>
        <Board />
      </div>
    </div>
  );
};

export default Blackjack;
