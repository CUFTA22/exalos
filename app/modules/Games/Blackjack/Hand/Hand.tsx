import Card from '../Card/Card';
import Typography from '@lib/Typography/Typography';
import styles from './Hand.module.scss';
import { Props } from './types';

const Hand: React.FC<Props> = ({ cards, title }) => {
  const isHouse = title === 'House hand';

  return (
    <div className={styles.hand}>
      {cards.length ? <Typography text={title} fSize={24} color="secondary" /> : null}

      <div className={styles.cards}>
        {cards.map((c, i) => (
          <Card {...c} isFlipped={isHouse && i > 0} />
        ))}
      </div>
    </div>
  );
};

export default Hand;
