import Card from '../Card/Card';
import Typography from '@lib/Typography/Typography';
import classes from './Hand.module.scss';
import { Props } from './types';
import { calculateHandValue } from '../utils';
import {
  Block24Regular,
  Dismiss24Regular,
  Premium24Regular,
  Trophy24Regular,
} from '@fluentui/react-icons';
import useBlackjack from '../useBlackjack';

const Hand: React.FC<Props> = ({ cards, title }) => {
  const { isLoading, handHouse } = useBlackjack();

  const isHouse = title === 'House hand';

  const handValue = calculateHandValue(cards);
  const houseValue = calculateHandValue(handHouse);

  return (
    <div className={classes.hand}>
      {cards.length ? (
        <div className={classes.top}>
          <Typography text={title} fSize={24} color="secondary" />
          {!isHouse && isLoading && handValue === 21 && (
            <div className={classes.BJ}>
              <Premium24Regular />
              <span>Blackjack</span>
            </div>
          )}
          {!isHouse && isLoading && handValue <= 21 && (
            <Typography text={` - Total: ${handValue}`} fSize={18} fWeight={600} color="primary" />
          )}
          {!isHouse &&
            !isLoading &&
            (handValue > 21 || (handValue < houseValue && houseValue <= 21)) && (
              <div className={classes.LOST}>
                <Dismiss24Regular />
                <span>Lost</span>
              </div>
            )}
          {!isHouse &&
            !isLoading &&
            ((houseValue < handValue && handValue <= 21) || houseValue > 21) && (
              <div className={classes.WIN}>
                <Trophy24Regular />
                <span>Win</span>
              </div>
            )}
          {!isHouse && !isLoading && handValue === houseValue && handValue <= 21 && (
            <div className={classes.DRAW}>
              <Block24Regular />
              <span>Draw</span>
            </div>
          )}
        </div>
      ) : null}

      <div className={classes.cards}>
        {cards.map((c, i) => (
          <Card key={i} {...c} isFlipped={isHouse && i > 0 && isLoading} />
        ))}
      </div>
    </div>
  );
};

export default Hand;
