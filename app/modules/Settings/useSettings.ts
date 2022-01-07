import { GlobalContext } from 'app/store/global/CTX';
import { useContext, useState } from 'react';

const useSettings = () => {
  const { customCursor, dispatch } = useContext(GlobalContext);

  const toggleCursor = () => dispatch({ type: 'CURSOR_TOGGLE' });

  return { customCursor, toggleCursor };
};

export default useSettings;
