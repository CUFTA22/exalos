import { IFluentIconsProps } from '@fluentui/react-icons';
import clsx from 'clsx';
import styles from './SimpleFAB.module.scss';

const SimpleFAB: React.FC<{ Icon: React.ReactElement<IFluentIconsProps> }> = ({ Icon }) => {
  return <div className={clsx(styles.lib_simpleFab, 'no-clickaway')}>{Icon}</div>;
};

export default SimpleFAB;
