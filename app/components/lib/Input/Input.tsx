import SimpleFAB from '@lib/SimpleFAB/SimpleFAB';
import clsx from 'clsx';
import styles from './Input.module.scss';
import { InputProps } from './types';

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  icons_back,
  icons_front,
  placeholder,
  width,
  disabled,
}) => {
  const css = {
    width,
  };

  return (
    <div className={styles.lib_input_container} style={css}>
      {icons_front?.map((Icon, i) => (
        <div key={i} className={styles.svg}>
          {Icon}
        </div>
      ))}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
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
