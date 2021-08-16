import React from 'react';
import styles from './SideBar.module.scss';
import Logo from '@assets/logos/exalos.svg';
import { sideBarItems } from 'app/utils/resources/sideBarData';
import SideBarItem from '@element/SideBarItem/SideBarItem';
import Link from 'next/link';
import FAB from '@lib/FAB/FAB';
import { Person24Regular } from '@fluentui/react-icons';

const SideBar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_top}>
        <Link href="/">
          <Logo />
        </Link>
      </div>

      <div className={styles.sidebar_mid}>
        {sideBarItems.map((item) => (
          <SideBarItem key={item.route} Icon={item.Svg} route={item.route} text={item.text} />
        ))}
      </div>

      <FAB className={styles.sidebar_bot} Icon={Person24Regular} />
    </div>
  );
};

export default SideBar;
