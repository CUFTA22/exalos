import SideBar from '@module/SideBar/SideBar';
import styles from './Default.module.scss';
import { Props } from './types';

const Default: React.FC<Props> = ({ children }) => (
  <div className={styles.default}>
    <div className={styles.content}>
      <SideBar />
      {children}
    </div>
  </div>
);

export default Default;
