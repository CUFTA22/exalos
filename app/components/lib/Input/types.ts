import { IFluentIconsProps } from '@fluentui/react-icons';

export interface InputProps {
  value: string;
  onChange: (val: string) => void;
  onEnter?: () => void;
  placeholder?: string;
  icons_front?: React.ReactElement<IFluentIconsProps>[];
  icons_back?: React.ReactElement<IFluentIconsProps>[];
  width?: string;
  className?: string;
  disabled?: boolean;
}
