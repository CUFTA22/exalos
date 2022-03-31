import clsx from 'clsx';
import classes from './Checkbox.module.scss';
import { Props } from './types';

const Checkbox: React.FC<Props> = ({ checked, toggleFunc }) => {
  return (
    <div onClick={() => toggleFunc(checked)} className={classes.lib_checkbox}>
      <div className={clsx(classes.checked_thumb, { [classes.checked]: checked })}></div>
    </div>
  );
};

export default Checkbox;
