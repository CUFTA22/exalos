import { FluentIconsProps } from '@fluentui/react-icons';
import Typography from '@lib/Typography/Typography';
import clsx from 'clsx';
import { SelectOption } from '../types';

interface Props {
  label: string;
  value: string;
  classes: any;
  selectedOption: SelectOption | null;
  handleChange: (option: SelectOption) => void;
  icon_option?: (option: SelectOption, selected: boolean) => React.ReactElement<FluentIconsProps>;
}

const SelectMenuOption: React.FC<Props> = ({
  label,
  selectedOption,
  value,
  classes,
  handleChange,
  icon_option,
}) => {
  const isSelected = selectedOption?.value === value;

  const IconOption = icon_option({ label, value }, isSelected);

  return (
    <div
      onClick={() => handleChange({ label, value })}
      className={clsx(classes.select_menu_option, 'no-clickaway', {
        [classes.selected]: isSelected,
      })}
    >
      {IconOption && <div className={classes.select_menu_option_svg}>{IconOption}</div>}

      <Typography text={label} fSize={14} color="secondary" />
    </div>
  );
};

export default SelectMenuOption;
