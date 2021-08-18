import NextNProgress from 'app/modules/PageTransition/NextNProgress';
import SideBar from '@shared/SideBar/SideBar';
import styles from './Default.module.scss';
import stars from '@styles/scss/parallaxStars.module.scss';
import { Props } from './types';

const Default: React.FC<Props> = ({ children }) => (
  <div className={styles.default}>
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

export default Default;
