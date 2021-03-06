import classes from './Select.module.scss';
import { useEffect, useRef, useState } from 'react';
import { animateStyles, SelectOption, SelectProps } from './types';
import SelectControl from './components/SelectControl';
import SelectMenu from './components/SelectMenu';
import clsx from 'clsx';
import useClickAway from '@hooks/useClickAway';
import Animate from '@lib/Animate/Animate';

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
    <div ref={selectRef} style={css} className={clsx(classes.select_wrapper, className)}>
      <SelectControl
        toggleOpen={toggleOpen}
        classes={classes}
        menuOpen={menuOpen}
        selectedOption={selectedOption}
        placeholder={placeholder}
        icon_control={icon_control}
        disabled={disabled}
      />

      <Animate animationIn="menuIn" animationOut="menuOut" style={animateStyles}>
        {menuOpen && !disabled && (
          <SelectMenu
            classes={classes}
            options={options}
            handleChange={handleChange}
            selectedOption={selectedOption}
            icon_option={icon_option}
          />
        )}
      </Animate>

      {isUnderline && (
        <>
          <div className={clsx(classes.focus_border, { [classes.expand]: menuOpen })}></div>
          <div
            className={clsx(classes.focus_border, classes.full, { [classes.disabled]: disabled })}
          ></div>
        </>
      )}
    </div>
  );
};

export default CustomSelect;
