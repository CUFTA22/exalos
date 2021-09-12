import { ChevronDown12Regular, IFluentIconsProps } from '@fluentui/react-icons';
import Input from '@lib/Input/Input';
import { SelectOption } from '../types';

interface Props {
  toggleOpen: () => void;
  className: string;
  menuOpen: boolean;
  selectedOption: SelectOption;
  icon_control: React.ReactElement<IFluentIconsProps>;
  placeholder: string;
}

const SelectControl: React.FC<Props> = ({
  toggleOpen,
  className,
  menuOpen,
  icon_control,
  placeholder,
  selectedOption,
}) => {
  return (
    <div onClick={toggleOpen} className={className}>
      <Input
        isUnderline={false}
        placeholder={placeholder}
        defaultValue={selectedOption?.label}
        icons_front={[icon_control]}
        disabled
        width="100%"
        className="no-clickaway"
      />
      <ChevronDown12Regular
        style={{
          transition: 'transform .2s ease-in-out',
          transform: menuOpen ? 'rotateX(180deg)' : '',
          color: 'hsl(206, 88%, 77%)',
        }}
      />
    </div>
  );
};

export default SelectControl;
