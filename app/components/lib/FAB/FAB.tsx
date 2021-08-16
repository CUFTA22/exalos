import styles from './FAB.module.scss';
import ripple from '@styles/scss/ripple.module.scss';
import clsx from 'clsx';
import { Props } from './types';

const FAB: React.FC<Props> = ({ Icon, className, children }) => {
  return (
    <div className={clsx(styles.lib_fab, className, ripple.ripple)}>
      <div className={styles.outer}></div>
      {<Icon /> || children}
    </div>
  );
};

export default FAB;
