import classes from './RouletteNumber.module.scss';
import clsx from 'clsx';
import { Props } from './types';

const RouletteNumber: React.FC<Props> = ({ c, n, size = 'normal' }) => {
  return <div className={clsx(classes.num, classes[`num_${c}`], classes[`num_${size}`])}>{n}</div>;
};

export default RouletteNumber;
