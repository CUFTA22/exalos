import { GlobalContext } from 'app/store/global/CTX';
import { useContext, useState } from 'react';

const useSettings = () => {
  const { customCursor, gif, dispatch } = useContext(GlobalContext);

  const toggleCursor = () => dispatch({ type: 'CURSOR_TOGGLE' });

  const toggleGif = () => dispatch({ type: 'GIF_TOGGLE' });

  return { customCursor, toggleCursor, gif, toggleGif };
};

export default useSettings;
