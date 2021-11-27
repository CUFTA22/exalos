import styles from './Card.module.scss';
import CardFlipped from './components/CardFlipped';
import CardPattern from './components/CardPattern';
import { Props } from './types';

const Card: React.FC<Props> = ({ color, symbol, value, type, isFlipped }) => {
  const cardNumber = ['J', 'K', 'Q'].includes(type) ? type : type === 'ace' ? 'A' : value;

  return (
    <div className={styles.card}>
      {isFlipped ? (
        <CardFlipped />
      ) : (
        <>
          <div className={styles.top_num}>{cardNumber}</div>
          <CardPattern color={color} symbol={symbol} value={value} type={type} />
          <div className={styles.bot_num}>{cardNumber}</div>
        </>
      )}
    </div>
  );
};

export default Card;
