import NextNProgress from '@module/PageTransition/NextNProgress';
import SideBar from '@shared/SideBar/SideBar';
import styles from './Default.module.scss';
import { Props } from './types';

const Default: React.FC<Props> = ({ children }) => (
  <div className={styles.default}>
    <SideBar />
    <div id="np-container" className={styles.content}>
      <NextNProgress
        options={{
          showSpinner: false,
          trickleSpeed: 200,
          parent: '#np-container',
        }}
      />
      {/* <PageTransition>{children}</PageTransition> */}
      {children}
    </div>
  </div>
);

export default Default;
