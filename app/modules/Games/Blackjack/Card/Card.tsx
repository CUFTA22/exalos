import classes from './Card.module.scss';
import CardFlipped from './components/CardFlipped';
import CardPattern from './components/CardPattern';
import { Props } from './types';

const Card: React.FC<Props> = ({ color, symbol, value, type, isFlipped }) => {
  const cardNumber = ['J', 'K', 'Q'].includes(type) ? type : type === 'ace' ? 'A' : value;

  return (
    <div className={classes.card}>
      {isFlipped ? (
        <CardFlipped />
      ) : (
        <>
          <div className={classes.top_num}>{cardNumber}</div>
          <CardPattern color={color} symbol={symbol} value={value} type={type} />
          <div className={classes.bot_num}>{cardNumber}</div>
        </>
      )}
    </div>
  );
};

export default Card;
