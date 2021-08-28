import styles from './Input.module.scss';
import { InputProps } from './types';

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  icons_back,
  icons_front,
  placeholder,
  width,
}) => {
  return (
    <div className={styles.lib_input_container}>
      <input type="text" />
    </div>
  );
};

export default Input;
