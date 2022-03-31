import Checkbox from '@lib/Checkbox/Checkbox';
import Typography from '@lib/Typography/Typography';
import React from 'react';
import classes from './SettingsRow.module.scss';
import { Props } from './types';

const SettingsRow: React.FC<Props> = ({ value, toggleValue, text, Icon }) => {
  return (
    <div className={classes.opt_row}>
      <Icon primaryFill="hsl(206, 88%, 77%)" />

      <Typography text={text} color="secondary" />

      <div className={classes.flex_grow}></div>

      <Checkbox checked={value} toggleFunc={toggleValue} />
    </div>
  );
};

export default SettingsRow;
