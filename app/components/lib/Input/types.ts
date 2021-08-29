import { IFluentIconsProps } from '@fluentui/react-icons';

export interface InputProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  icons_front?: React.ReactElement<IFluentIconsProps>[];
  icons_back?: React.ReactElement<IFluentIconsProps>[];
  width?: string;
  disabled?: boolean;
}
