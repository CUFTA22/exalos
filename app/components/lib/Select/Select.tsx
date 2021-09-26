import styles from './Select.module.scss';
import { useCallback, useEffect, useRef, useState } from 'react';
import { SelectOption, SelectProps } from './types';
import SelectControl from './components/SelectControl';
import SelectMenu from './components/SelectMenu';
import clsx from 'clsx';
import useClickAway from '@hooks/useClickAway';

const CustomSelect: React.FC<SelectProps> = ({
  className,
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
  const [selectedOption, setSelectedOption] = useState<SelectOption | null>(null);

  const handleChange = (option: SelectOption) => {
    setSelectedOption(option);
    setMenuOpen(false);
    onChange(option);
  };

  const toggleOpen = () => {
    !disabled && setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    setSelectedOption(value);
  }, [value]);

  useClickAway(selectRef, () => setMenuOpen(false));

  const css = { width, cursor: disabled ? 'default' : 'pointer' };

  return (
    <div ref={selectRef} style={css} className={clsx(styles.select_wrapper, className)}>
      <SelectControl
        toggleOpen={toggleOpen}
        styles={styles}
        menuOpen={menuOpen}
        selectedOption={selectedOption}
        placeholder={placeholder}
        icon_control={icon_control}
        disabled={disabled}
      />

      {menuOpen && !disabled && (
        <SelectMenu
          styles={styles}
          options={options}
          handleChange={handleChange}
          selectedOption={selectedOption}
        />
      )}

      {isUnderline && (
        <>
          <div className={clsx(styles.focus_border, { [styles.expand]: menuOpen })}></div>
          <div
            className={clsx(styles.focus_border, styles.full, { [styles.disabled]: disabled })}
          ></div>
        </>
      )}
    </div>
  );
};

export default CustomSelect;
