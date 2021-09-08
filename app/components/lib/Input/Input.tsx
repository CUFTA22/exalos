import SimpleFAB from '@lib/SimpleFAB/SimpleFAB';
import { debounce } from 'app/utils/functions/debounce';
import clsx from 'clsx';
import { useCallback } from 'react';
import styles from './Input.module.scss';
import { InputProps } from './types';

const Input: React.FC<InputProps> = ({
  value,
  defaultValue,
  onChange,
  onEnter,
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
}) => {
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
      {icons_front?.map((Icon, i) => (
        <div key={i} className={styles.svg}>
          {Icon}
        </div>
      ))}
      <input
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

      {!disabled && isUnderline && (
        <>
          <div className={styles.focus_border}></div>
          <div className={clsx(styles.focus_border, styles.full)}></div>
        </>
      )}

      {icons_back?.map((Icon, i) => (
        <SimpleFAB key={i} Icon={Icon} />
      ))}
    </div>
  );
};

export default Input;
