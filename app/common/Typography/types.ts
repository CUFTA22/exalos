export interface TypographyProps {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span' | 'div';
  text?: string;
  className?: string;
  fSize?: number;
  fWeight?: number;
  fFamily?: string;
  pad?: string;
  color?: 'primary' | 'secondary';
  maxLines?: number;
  width?: string;
}
