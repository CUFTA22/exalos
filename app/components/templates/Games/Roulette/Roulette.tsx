import Board from '@module/Games/Roulette/Board/Board';
import Chat from '@module/Games/Roulette/Chat/Chat';
import Header from '@module/Games/Roulette/Header/Header';
import classes from './Roulette.module.scss';
import { RouletteProps } from './types';

const Roulette: React.FC<RouletteProps> = ({ type }) => {
  return (
    <div className={classes.page_roulette}>
      <Header type={type} />

      <div className={classes.game_container}>
        <Board type={type} />
        <Chat />
      </div>
    </div>
  );
};

export default Roulette;
