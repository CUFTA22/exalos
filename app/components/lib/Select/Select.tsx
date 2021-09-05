import { ChevronDown12Regular } from '@fluentui/react-icons';
import { useCallback } from 'react';
import { Select } from 'react-functional-select';
import { customStyles } from './styles';
import { CustomSelectProps } from './types';

const CustomSelect: React.FC<CustomSelectProps> = ({ className, ...props }) => {
  const customCaretIcon = useCallback(
    ({ menuOpen }): React.ReactNode => (
      <ChevronDown12Regular
        style={{
          transition: 'transform .2s ease-in-out',
          transform: menuOpen ? 'rotateX(180deg)' : '',
          color: 'hsl(206, 88%, 77%)',
        }}
      />
    ),
    []
  );

  return (
    <div className={className}>
      <Select
        themeConfig={customStyles}
        noOptionsMsg="No types"
        caretIcon={customCaretIcon}
        {...props}
      />
    </div>
  );
};

export default CustomSelect;
