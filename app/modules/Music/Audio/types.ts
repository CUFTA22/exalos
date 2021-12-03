import { ForwardedRef } from 'react';

export interface Props {
  song: string;
  ref?: ForwardedRef<HTMLAudioElement>;
  loop: boolean;
}
