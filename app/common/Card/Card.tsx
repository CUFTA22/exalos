import classes from './Card.module.scss';
import clsx from 'clsx';
import { Props } from './types';

const Card: React.FC<Props> = ({ className, onClick, children }) => {
  return (
    <div onClick={onClick} className={clsx(classes.lib_card, className)}>
      {children}
    </div>
  );
};

export default Card;
