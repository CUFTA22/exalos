import { CSSProperties, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface Props {
  isOpen: boolean;
  color: string;
  onChange: (color: string) => void;
  isDebounce?: boolean;
  css?: CSSProperties;
}
