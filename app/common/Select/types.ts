import { FluentIconsProps } from '@fluentui/react-icons';

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps {
  value?: SelectOption;
  placeholder?: string;
  onChange?: (option: SelectOption) => void;
  options?: SelectOption[];
  icon_control?: React.ReactElement<FluentIconsProps>;
  icon_option?: (option: SelectOption, selected: boolean) => React.ReactElement<FluentIconsProps>;
  className?: string;
  width?: string;
  disabled?: boolean;
  isUnderline?: boolean;
}

export const animateStyles = {
  position: 'absolute',
  inset: '28px 0px 0px',
  height: 'fit-content',
  zIndex: '19',
};
