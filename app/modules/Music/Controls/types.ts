import { Dispatch } from 'react';
import { State } from '../Wrapper/types';

export interface Props {
  wrapperState: State;
  setWrapperState: Dispatch<State>;
  currentTime: number;
  setCurrentTime: Dispatch<number>;
}
