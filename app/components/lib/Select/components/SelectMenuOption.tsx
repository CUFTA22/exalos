import { SelectOption } from '../types';

interface Props {
  label: string;
  value: string;
  className: string;
  selectedOption: SelectOption;
  options: SelectOption[];
  handleChange: (option: SelectOption) => void;
}

const SelectMenuOption: React.FC<Props> = ({
  label,
  options,
  selectedOption,
  value,
  className,
  handleChange,
}) => {
  const isSelected = false;

  return (
    <div onClick={() => handleChange({ label, value })} className={className}>
      {label}
    </div>
  );
};

export default SelectMenuOption;
