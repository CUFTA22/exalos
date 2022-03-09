import { Dispatch } from 'react';

// -----------------------------------------------------------------
// For global context
// -----------------------------------------------------------------

export type Global_Context_Action =
  | { type: 'CURSOR_TOGGLE' }
  | { type: 'GIF_TOGGLE' }
  | { type: 'HIDDEN_TOGGLE' };

export interface Global_Context {
  dispatch: Dispatch<Global_Context_Action>;
  customCursor: boolean;
  gif: boolean;
  enableHidden: boolean;
}
