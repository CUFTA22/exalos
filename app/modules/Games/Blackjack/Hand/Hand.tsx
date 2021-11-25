import Card from '../Card/Card';
import Typography from '@lib/Typography/Typography';
import styles from './Hand.module.scss';
import { Props } from './types';

const Hand: React.FC<Props> = ({ cards, title }) => {
  return (
    <div className={styles.hand}>
      <div className="title">
        <Typography text={title} fSize={20} color="secondary" />
      </div>

      <div className="cards">
        {cards.map((c) => (
          <Card {...c} />
        ))}
      </div>
    </div>
  );
};

export default Hand;
