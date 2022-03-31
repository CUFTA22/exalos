import clsx from 'clsx';
import classes from './Spinner.module.scss';

const Spinner = () => {
  return (
    <div className={classes.loader}>
      <div className={clsx(classes.inner, classes.one)}></div>
      <div className={clsx(classes.inner, classes.two)}></div>
      <div className={clsx(classes.inner, classes.three)}></div>
    </div>
  );
};

export default Spinner;
