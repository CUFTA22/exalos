import styles from './FAB.module.scss';
import ripple from '@styles/scss/ripple.module.scss';
import clsx from 'clsx';
import { Props } from './types';

const FAB: React.FC<Props> = ({ Icon, className, onClick, children }) => {
  return (
    <div onClick={onClick} className={clsx(styles.lib_fab, className, ripple.ripple)}>
      <div className={styles.outer}></div>
      {children || <Icon />}
    </div>
  );
};

export default FAB;
