import NextNProgress from '@module/PageTransition/NextNProgress';
import SideBar from '@shared/SideBar/SideBar';
import styles from './Default.module.scss';
import stars from '@styles/scss/parallaxStars.module.scss';
import { Props } from './types';
import useNotification from '@module/Notifications/useNotification';

const Default: React.FC<Props> = ({ children }) => {
  const { NotificationContainer, list } = useNotification();

  return (
    <div className={styles.default}>
      <NotificationContainer arr={list} />
      <div id={stars.stars}></div>
      <div id={stars.stars2}></div>
      <div id={stars.stars3}></div>

      <SideBar />
      <div id="np-container" className={styles.content}>
        <NextNProgress />
        {children}
      </div>
    </div>
  );
};

export default Default;
