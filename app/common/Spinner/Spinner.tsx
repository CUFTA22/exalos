import clsx from 'clsx';
import styles from './Spinner.module.scss';

const Spinner = () => {
  return (
    <div className={styles.loader}>
      <div className={clsx(styles.inner, styles.one)}></div>
      <div className={clsx(styles.inner, styles.two)}></div>
      <div className={clsx(styles.inner, styles.three)}></div>
    </div>
  );
};

export default Spinner;
