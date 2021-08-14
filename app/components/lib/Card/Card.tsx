import styles from './Card.module.scss';
import clsx from 'clsx';
import { Props } from './types';
const Card: React.FC<Props> = ({ className, children }) => {
  return <div className={clsx(styles.lib_card, className)}>{children}</div>;
};

export default Card;
