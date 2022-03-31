import clsx from 'clsx';
import React from 'react';
import classes from './Slider.module.scss';
import { Props } from './types';

const Slider: React.FC<Props> = React.forwardRef<HTMLInputElement, Props>(
  ({ onChange, value, max = '', min = '', defaultValue, isVertical = false, className }, ref) => {
    return (
      <div className={clsx(classes.range_wrapper, className, { [classes.isVertical]: isVertical })}>
        <input
          ref={ref}
          className={classes.input}
          type="range"
          value={value}
          defaultValue={defaultValue}
          onChange={(e) => onChange(parseInt(e.target.value))}
          min={min}
          max={max}
        />
      </div>
    );
  }
);

export default Slider;
