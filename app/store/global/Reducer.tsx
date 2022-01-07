import { Global_Context, Global_Context_Action } from '@ts/global.types';

const noop = () => false;

export const initialState: Global_Context = {
  customCursor: false,
  dispatch: noop,
};

export const globalReducer = (
  state: Global_Context,
  action: Global_Context_Action
): Global_Context => {
  switch (action.type) {
    case 'CURSOR_TOGGLE':
      return { ...state, customCursor: !state.customCursor };

    default:
      return state;
  }
};
