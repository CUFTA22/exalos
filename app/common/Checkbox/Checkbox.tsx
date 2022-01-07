import styles from './Checkbox.module.scss';
import { Props } from './types';

const Checkbox: React.FC<Props> = ({ checked, toggleFunc }) => {
  return (
    <div onClick={() => toggleFunc(checked)} className={styles.lib_checkbox}>
      {checked && <div className={styles.checked_thumb}></div>}
    </div>
  );
};

export default Checkbox;
