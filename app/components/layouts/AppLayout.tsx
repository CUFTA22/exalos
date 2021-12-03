import useScreenSize from '@hooks/useScreenSize';
import Default from './Default/Default';
import Mobile from './Mobile/Mobile';

const AppLayout: React.FC = ({ children }) => {
  const screenSize = useScreenSize();

  if (!screenSize) return null;
  return (
    <>{screenSize?.screen === 'xs' ? <Mobile>{children}</Mobile> : <Default>{children}</Default>}</>
  );
};

export default AppLayout;
