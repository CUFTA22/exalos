import { IFluentIconsProps } from '@fluentui/react-icons';
import Typography from '@lib/Typography/Typography';
import clsx from 'clsx';
import { SelectOption } from '../types';
import SelectMenuOption from './SelectMenuOption';

interface Props {
  styles: any;
  options: SelectOption[];
  handleChange: (option: SelectOption) => void;
  selectedOption: SelectOption;
  icon_option?: (option: SelectOption, selected: boolean) => React.ReactElement<IFluentIconsProps>;
}

const SelectMenu: React.FC<Props> = ({
  styles,
  options,
  handleChange,
  selectedOption,
  icon_option,
}) => {
  if (!options.length)
    return (
      <div
        className={styles.select_menu}
        style={{ padding: '10px', textAlign: 'center', cursor: 'default' }}
      >
        <Typography text="No Options" fSize={14} color="secondary" />
      </div>
    );

  return (
    <div className={clsx(styles.select_menu, 'no-clickaway')}>
      {options.map((option) => (
        <SelectMenuOption
          key={option.value}
          selectedOption={selectedOption}
          styles={styles}
          handleChange={handleChange}
          icon_option={icon_option}
          {...option}
        />
      ))}
    </div>
  );
};

export default SelectMenu;
