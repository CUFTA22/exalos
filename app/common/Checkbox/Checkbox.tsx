import clsx from 'clsx';
import styles from './Checkbox.module.scss';
import { Props } from './types';

const Checkbox: React.FC<Props> = ({ checked, toggleFunc }) => {
  return (
    <div onClick={() => toggleFunc(checked)} className={styles.lib_checkbox}>
      <div className={clsx(styles.checked_thumb, {[styles.checked]: checked})}></div>
    </div>
  );
};

export default Checkbox;
