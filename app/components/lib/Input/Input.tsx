import React, { useCallback } from 'react';
import SimpleFAB from '@lib/SimpleFAB/SimpleFAB';
import { debounce } from 'app/utils/functions/debounce';
import clsx from 'clsx';
import styles from './Input.module.scss';
import { InputProps } from './types';

const Input: React.FC<InputProps> = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      value,
      defaultValue,
      onChange,
      onEnter = () => {},
      icons_back,
      icons_front,
      placeholder,
      width = '200px',
      fSize = '13px',
      className,
      disabled,
      isUnderline = true,
      isDebounce = false,
      debounceTime = 1000,
      minLength = 0,
      maxLength = 100,
    },
    ref
  ) => {
    const debouncedOnChange = useCallback(
      debounce((val: string) => onChange(val), debounceTime),
      [onChange]
    );

    const css = {
      width,
    };
    const inputCss = {
      fontSize: fSize,
    };

    return (
      <div className={clsx(styles.lib_input_container, className)} style={css}>
        {icons_front?.map(
          (Icon, i) =>
            Icon && (
              <div key={i} className={clsx(styles.svg, { [styles.disabled]: disabled })}>
                {Icon}
              </div>
            )
        )}

        <input
          ref={ref}
          type="text"
          value={value}
          defaultValue={defaultValue}
          className={className}
          style={inputCss}
          onChange={(e) =>
            isDebounce ? debouncedOnChange(e.target.value) : onChange(e.target.value)
          }
          onKeyPress={(e) => e.code === 'Enter' && onEnter()}
          placeholder={placeholder}
          disabled={disabled}
          minLength={minLength}
          maxLength={maxLength}
        />

        {isUnderline && (
          <>
            <div className={styles.focus_border}></div>
            <div
              className={clsx(styles.focus_border, styles.full, { [styles.disabled]: disabled })}
            ></div>
          </>
        )}

        {icons_back?.map((Icon, i) => (
          <SimpleFAB key={i} Icon={Icon} />
        ))}
      </div>
    );
  }
);

export default Input;
