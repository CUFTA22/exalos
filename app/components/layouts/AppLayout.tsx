import styles from './Layout.module.scss';
import stars from '@styles/scss/parallaxStars.module.scss';

import useScreenSize from '@hooks/useScreenSize';
import useSettings from '@module/Settings/useSettings';

import NextNProgress from '@module/PageTransition/NextNProgress';
import SideBar from '@shared/SideBar/SideBar';
import AppBar from '@shared/AppBar/AppBar';
import Shikinami from '@module/Shikinami/Shikinami';

import Logo from '@assets/logos/exalos.svg';
import { CustomCursor } from 'react-svg-cursor';

const AppLayout: React.FC = ({ children }) => {
  const screenSize = useScreenSize();
  const { customCursor, gif } = useSettings();
  // const { NotificationContainer, list } = useNotification();

  if (!screenSize) return null;

  const isMobile = screenSize?.screen === 'xs';

  return (
    <>
      {/* <Cursor disabled={!customCursor} /> */}
      <CustomCursor
        component={Logo}
        isDisabled={!customCursor}
        transform="translate(-30%, -10%) rotateZ(-22deg)"
        width={16}
        height={16}
      />

      <Shikinami disabled={!gif} />

      <div className={isMobile ? styles.mobile : styles.desktop}>
        {!isMobile && (
          <>
            <div id={stars.stars}></div>
            <div id={stars.stars2}></div>
            <div id={stars.stars3}></div>
          </>
        )}

        {!isMobile && <SideBar />}

        <div
          id="np-container"
          className={!isMobile ? styles.desktop_content : styles.mobile_content}
        >
          <NextNProgress />
          {children}
        </div>

        {isMobile && <AppBar />}
      </div>
    </>
  );
};

export default AppLayout;
