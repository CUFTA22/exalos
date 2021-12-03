import clsx from 'clsx';
import React from 'react';
import styles from './Slider.module.scss';
import { Props } from './types';

const Slider: React.FC<Props> = React.forwardRef<HTMLInputElement, Props>(
  ({ onChange, value, max = '', min = '', defaultValue, isVertical = false, className }, ref) => {
    return (
      <div className={clsx(styles.range_wrapper, className, { [styles.isVertical]: isVertical })}>
        <input
          ref={ref}
          className={styles.input}
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
