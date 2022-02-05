import { ChevronDown12Regular, IFluentIconsProps } from '@fluentui/react-icons';
import Input from '@lib/Input/Input';
import clsx from 'clsx';
import { SelectOption } from '../types';

interface Props {
  toggleOpen: () => void;
  styles: any;
  menuOpen: boolean;
  selectedOption: SelectOption;
  icon_control: React.ReactElement<IFluentIconsProps>;
  placeholder: string;
  disabled: boolean;
}

const SelectControl: React.FC<Props> = ({
  toggleOpen,
  styles,
  menuOpen,
  icon_control,
  placeholder,
  selectedOption,
  disabled,
}) => {
  const IconControl = icon_control;
  return (
    <div onClick={toggleOpen} className={styles.select_control}>
      {IconControl && <div className={styles.select_control_svg}>{IconControl}</div>}

      <div
        className={clsx(styles.select_value_display, 'no-clickaway', {
          [styles.no_option]: !selectedOption?.label,
        })}
      >
        {selectedOption?.label || placeholder}
      </div>

      <ChevronDown12Regular
        className="no-clickaway"
        style={{
          width: '18px',
          height: 'auto',
          transition: 'transform .2s ease-in-out',
          transform: menuOpen ? 'rotateX(180deg)' : '',
          color: disabled ? 'hsla(240, 28%, 64%, 0.8)' : 'hsl(206, 88%, 77%)',
        }}
      />
    </div>
  );
};

export default SelectControl;
