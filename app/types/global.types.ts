import { Dispatch } from 'react';

// -----------------------------------------------------------------
// For food context
// -----------------------------------------------------------------

export type Global_Context_Action = { type: 'CURSOR_TOGGLE' };

export interface Global_Context {
  customCursor: boolean;
  dispatch: Dispatch<Global_Context_Action>;
}
