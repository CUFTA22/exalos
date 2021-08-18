import { ChevronDown12Regular } from '@fluentui/react-icons';
import { useCallback } from 'react';
import { Select, SelectProps } from 'react-functional-select';
import { customStyles } from './styles';

const CustomSelect: React.FC<SelectProps> = (props) => {
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

  return <Select themeConfig={customStyles} caretIcon={customCaretIcon} {...props} />;
};

export default CustomSelect;
