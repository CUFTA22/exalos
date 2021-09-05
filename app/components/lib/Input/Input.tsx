import SimpleFAB from '@lib/SimpleFAB/SimpleFAB';
import clsx from 'clsx';
import styles from './Input.module.scss';
import { InputProps } from './types';

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  onEnter,
  icons_back,
  icons_front,
  placeholder,
  width,
  className,
  disabled,
}) => {
  const css = {
    width,
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
        className={className}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={(e) => e.code === 'Enter' && onEnter()}
        placeholder={placeholder}
        disabled={disabled}
      />

      {!disabled && (
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
