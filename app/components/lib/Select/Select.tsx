import styles from './Select.module.scss';
import { useCallback, useRef, useState } from 'react';
import { SelectOption, SelectProps } from './types';
import SelectControl from './components/SelectControl';
import SelectMenu from './components/SelectMenu';
import clsx from 'clsx';
import useClickAway from '@hooks/useClickAway';

const CustomSelect: React.FC<SelectProps> = ({
  className,
  defaultValue,
  disabled = false,
  icon_control,
  icon_option,
  isUnderline = true,
  onChange,
  width = '200px',
  options,
  placeholder,
  value,
}) => {
  const selectRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<SelectOption>(value || defaultValue);

  const handleChange = (option: SelectOption) => {
    setSelectedOption(option);
    setMenuOpen(false);
    onChange(option);
  };

  const toggleOpen = () => {
    setMenuOpen(!menuOpen);
  };

  useClickAway(selectRef, () => setMenuOpen(false));

  const css = { width };

  return (
    <div ref={selectRef} style={css} className={clsx(styles.select_wrapper, className)}>
      <SelectControl
        toggleOpen={toggleOpen}
        className={styles.select_control}
        menuOpen={menuOpen}
        selectedOption={selectedOption}
        placeholder={placeholder}
        icon_control={icon_control}
      />

      {menuOpen && !disabled && (
        <SelectMenu
          className={styles.select_menu}
          optionClassName={styles.select_menu_option}
          options={options}
          handleChange={handleChange}
          selectedOption={selectedOption}
        />
      )}

      {!disabled && isUnderline && (
        <>
          <div className={clsx(styles.focus_border, { [styles.expand]: menuOpen })}></div>
          <div className={clsx(styles.focus_border, styles.full)}></div>
        </>
      )}
    </div>
  );
};

export default CustomSelect;
