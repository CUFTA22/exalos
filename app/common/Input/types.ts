import { FluentIconsProps } from '@fluentui/react-icons';
import { ForwardedRef } from 'react';

export interface InputProps {
  ref?: ForwardedRef<HTMLInputElement>;
  value?: string | number;
  defaultValue?: string;
  type?: string;
  onChange?: (val: string) => void;
  onClick?: () => void;
  onEnter?: () => void;
  placeholder?: string;
  icons_front?: React.ReactElement<FluentIconsProps>[];
  icons_back?: React.ReactElement<FluentIconsProps>[];
  width?: string;
  fSize?: string;
  className?: string;
  disabled?: boolean;
  applyDisabledStyles?: boolean;
  isUnderline?: boolean;
  isDebounce?: boolean;
  debounceTime?: number;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}
