import { BlackjackCard } from '@utils/resources/blackjackCards';
import classes from './CardPattern.module.scss';
import clsx from 'clsx';
import Logo from '@assets/logos/exalos.svg';
import Queen from '@assets/icons/card_queen.svg';
import King from '@assets/icons/card_king.svg';
import Jack from '@assets/icons/card_jack.svg';
import { Stop16Filled } from '@fluentui/react-icons';

const CardPattern: React.FC<BlackjackCard> = ({ value, type, color, symbol }) => {
  const CardPicture = type === 'J' ? Jack : type === 'K' ? King : Queen;
  const CardSymbol = symbol;

  const isSquare = symbol === Stop16Filled;

  return (
    <div className={classes.card_pattern}>
      {type === 'ace' && (
        <div className={classes.ace_logo}>
          <Logo />
        </div>
      )}

      {['J', 'K', 'Q'].includes(type) && <CardPicture className={classes.picture_logo} />}

      {type === 'num' && (
        <div
          className={clsx(
            classes.number_logo,
            classes[`number_logo_${value}`],
            classes[`number_logo_${color}`],
            { [classes.is_square]: isSquare }
          )}
        >
          {Array.apply(null, Array(value)).map((_val, i) => (
            <CardSymbol key={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CardPattern;
