import NextNProgress from '@module/PageTransition/NextNProgress';
import AppBar from '@shared/AppBar/AppBar';
import styles from './Mobile.module.scss';

const Mobile: React.FC<{}> = ({ children }) => {
  return (
    <div id="np-container" className={styles.mobile}>
      <NextNProgress />

      <div className={styles.content}>{children}</div>

      <AppBar />
    </div>
  );
};

export default Mobile;
