import { IFluentIconsProps } from '@fluentui/react-icons';

export interface InputProps {
  value?: string;
  defaultValue?: string;
  onChange?: (val: string) => void;
  onEnter?: () => void;
  placeholder?: string;
  icons_front?: React.ReactElement<IFluentIconsProps>[];
  icons_back?: React.ReactElement<IFluentIconsProps>[];
  width?: string;
  fSize?: string;
  className?: string;
  disabled?: boolean;
  isUnderline?: boolean;
  isDebounce?: boolean;
  debounceTime?: number;
  minLength?: number;
  maxLength?: number;
}
