export interface ButtonProps {
  type?: 'primary' | 'cancel' | 'inactive';
  onClick?: any;
  text: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  width?: number;
  color?: string;
  Icon?: any;
  isLoading?: boolean;
  hidden?: boolean;
  disabled?: boolean;
}
