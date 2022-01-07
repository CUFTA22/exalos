import useScreenSize from '@hooks/useScreenSize';
import Cursor from '@module/Cursor/Cursor';
import useSettings from '@module/Settings/useSettings';
import { GlobalContext } from 'app/store/global/CTX';
import { useContext } from 'react';
import Default from './Default/Default';
import Mobile from './Mobile/Mobile';

const AppLayout: React.FC = ({ children }) => {
  const screenSize = useScreenSize();
  const { customCursor } = useSettings();

  if (!screenSize) return null;
  return (
    <>
      <Cursor disabled={!customCursor} />
      {screenSize?.screen === 'xs' ? <Mobile>{children}</Mobile> : <Default>{children}</Default>}
    </>
  );
};

export default AppLayout;
