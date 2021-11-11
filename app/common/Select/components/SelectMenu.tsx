import Typography from '@lib/Typography/Typography';
import clsx from 'clsx';
import { SelectOption } from '../types';
import SelectMenuOption from './SelectMenuOption';

interface Props {
  styles: any;
  options: SelectOption[];
  handleChange: (option: SelectOption) => void;
  selectedOption: SelectOption;
}

const SelectMenu: React.FC<Props> = ({ styles, options, handleChange, selectedOption }) => {
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
          {...option}
        />
      ))}
    </div>
  );
};

export default SelectMenu;
