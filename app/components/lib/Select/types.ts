import { IFluentIconsProps } from '@fluentui/react-icons';

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps {
  value?: SelectOption;
  placeholder?: string;
  onChange?: (option: SelectOption) => void;
  options?: SelectOption[];
  icon_control?: React.ReactElement<IFluentIconsProps>;
  icon_option?: React.ReactElement<IFluentIconsProps>;
  className?: string;
  width?: string;
  disabled?: boolean;
  isUnderline?: boolean;
}
