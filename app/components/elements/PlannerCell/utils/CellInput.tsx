import { debounce } from 'app/utils/functions/debounce';
import { useCallback } from 'react';

interface Props {
  defaultValue: string;
  onChange: (val: string) => void;
  disabled: boolean;
}

const CellInput: React.FC<Props> = ({ defaultValue, onChange, disabled }) => {
  const debouncedOnChange = useCallback(
    debounce((val: string) => onChange(val), 1000),
    [onChange]
  );

  return (
    <input
      defaultValue={defaultValue}
      onChange={(e) => debouncedOnChange(e.target.value)}
      disabled={disabled}
    />
  );
};

export default CellInput;
