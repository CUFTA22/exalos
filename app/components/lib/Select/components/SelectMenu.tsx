import { SelectOption } from '../types';
import SelectMenuOption from './SelectMenuOption';

interface Props {
  className: string;
  optionClassName: string;
  options: SelectOption[];
  handleChange: (option: SelectOption) => void;
  selectedOption: SelectOption;
}

const SelectMenu: React.FC<Props> = ({
  className,
  options,
  handleChange,
  optionClassName,
  selectedOption,
}) => {
  if (!options)
    return (
      <div className={className}>
        <span>No Options</span>
      </div>
    );

  return (
    <div className={className}>
      {options.map((option) => (
        <SelectMenuOption
          key={option.value}
          selectedOption={selectedOption}
          options={options}
          className={optionClassName}
          handleChange={handleChange}
          {...option}
        />
      ))}
    </div>
  );
};

export default SelectMenu;
