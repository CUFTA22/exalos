import styles from './ColorPicker.module.scss';
import { Props } from './types';
import { HexColorPicker } from 'react-colorful';
import { useCallback, useEffect, useRef, useState } from 'react';
import useClickAway from '@hooks/useClickAway';
import Input from '@lib/Input/Input';
import { debounce } from 'app/utils/functions/debounce';

const ColorPicker: React.FC<Props> = ({ color, isOpen, onChange, isDebounce = false }) => {
  const popoverRef = useRef();
  const [state, setState] = useState({
    colorVal: color,
    open: isOpen,
  });

  const handleChange = (color: string) => {
    onChange(color);
    setState({ ...state, colorVal: color });
  };
  const debouncedOnChange = useCallback(
    debounce((color: string) => handleChange(color), 1000),
    [onChange]
  );

  useClickAway(popoverRef, () => setState({ ...state, open: false }));
  useEffect(() => {
    setState({ ...state, open: isOpen, colorVal: color });
  }, [isOpen]);

  if (!state.open) return null;
  return (
    <div className={styles.color_picker_container} ref={popoverRef}>
      <HexColorPicker
        className={styles.color_picker}
        color={color}
        onChange={(color) => (isDebounce ? debouncedOnChange(color) : handleChange(color))}
      />
      <Input
        defaultValue={state.colorVal}
        onChange={(color) => (isDebounce ? debouncedOnChange(color) : handleChange(color))}
        width="100%"
        fSize="12px"
        placeholder="Hex value"
        maxLength={7}
        minLength={7}
      />
    </div>
  );
};

export default ColorPicker;
