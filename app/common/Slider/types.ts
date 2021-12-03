import { ForwardedRef } from 'react';

export interface Props {
  ref?: ForwardedRef<HTMLInputElement>;
  className?: string;

  value?: number;
  defaultValue?: number;

  min?: number;
  max?: number;

  isVertical?: boolean;

  onChange: (time: number) => void;
}
