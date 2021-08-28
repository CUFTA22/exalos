export interface InputProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  icons_front?: React.FC[];
  icons_back?: React.FC[];
  width?: string;
}
