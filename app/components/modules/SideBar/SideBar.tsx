import React from 'react';
import styles from './SideBar.module.scss';
import Logo from '@assets/logos/exalos.svg';
import { sideBarItems } from 'app/utils/resources/sideBarData';
import SideBarItem from '@element/SideBarItem/SideBarItem';

const SideBar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        <Logo />
      </div>
      <div className={styles.sidebarMiddle}>
        {sideBarItems.map((item) => (
          <SideBarItem
            key={item.route}
            Icon={item.Svg}
            route={item.route}
            text={item.text}
          />
        ))}
      </div>
      <div className={styles.sidebarBottom}></div>
    </div>
  );
};

export default SideBar;
