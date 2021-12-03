import NextNProgress from '@module/PageTransition/NextNProgress';
import SideBar from '@shared/SideBar/SideBar';
import styles from './Mobile.module.scss';

const Mobile: React.FC<{}> = ({ children }) => {
  return (
    <div id="np-container" className={styles.mobile}>
      <NextNProgress />

      {children}

      <SideBar />
    </div>
  );
};

export default Mobile;
