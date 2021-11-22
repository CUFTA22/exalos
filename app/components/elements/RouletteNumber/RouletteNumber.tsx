import styles from './RouletteNumber.module.scss';
import clsx from 'clsx';
import { Props } from './types';

const RouletteNumber: React.FC<Props> = ({ c, n, size = 'normal' }) => {
  return <div className={clsx(styles.num, styles[`num_${c}`], styles[`num_${size}`])}>{n}</div>;
};

export default RouletteNumber;
