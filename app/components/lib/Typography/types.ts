export interface TypographyProps {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span';
  text?: string;
  className?: string;
  fSize?: number;
  fWeight?: number;
  fFamily?: string;
  pad?: string;
  color?: 'primary' | 'secondary';
}
