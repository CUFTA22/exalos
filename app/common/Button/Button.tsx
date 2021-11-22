import styles from './Button.module.scss';
import clsx from 'clsx';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  Icon,
  color,
  size = 'medium',
  width = 200,
  type = 'primary',
  className,
  isLoading = false,
  hidden = false,
  disabled = false,
}) => {
  const potentialStyles = {
    width: width + 'px',
    display: hidden ? 'none' : 'flex',
    cursor: disabled ? 'default' : 'pointer',
    color,
  };

  const Spinner = <div className={styles.loader}></div>;
  const clickFunc = !disabled && !isLoading ? onClick : () => {};
  type = disabled ? 'inactive' : type;

  return (
    <div
      className={clsx(styles.lib_button, className, styles[type], styles[size])}
      onClick={clickFunc}
      style={potentialStyles}
    >
      {!isLoading && Icon && <Icon />}
      {isLoading ? Spinner : text}
    </div>
  );
};

export default Button;
