import SideBar from '@module/SideBar/SideBar';
import styles from './Default.module.scss';

type Props = {
  children: React.ReactNode;
};

const Default: React.FC<Props> = ({ children }) => (
  <div className={styles.default}>
    <SideBar />
    <div className={styles.content}>{children}</div>
  </div>
);

export default Default;
