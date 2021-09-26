import Typography from '@lib/Typography/Typography';
import clsx from 'clsx';
import { SelectOption } from '../types';

interface Props {
  label: string;
  value: string;
  styles: any;
  selectedOption: SelectOption | null;
  handleChange: (option: SelectOption) => void;
}

const SelectMenuOption: React.FC<Props> = ({
  label,
  selectedOption,
  value,
  styles,
  handleChange,
}) => {
  const isSelected = selectedOption?.value === value;

  return (
    <div
      onClick={() => handleChange({ label, value })}
      className={clsx(styles.select_menu_option, 'no-clickaway', { [styles.selected]: isSelected })}
    >
      <Typography text={label} fSize={14} color="secondary" />
    </div>
  );
};

export default SelectMenuOption;
