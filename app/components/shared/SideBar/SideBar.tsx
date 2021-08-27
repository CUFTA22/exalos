import React from 'react';
import { signIn, useSession } from 'next-auth/client';
import styles from './SideBar.module.scss';
import Logo from '@assets/logos/exalos.svg';
import { protectedRoutes, sideBarItems } from 'app/utils/resources/sideBarData';
import SideBarItem from '@element/SideBarItem/SideBarItem';
import Link from 'next/link';
import FAB from '@lib/FAB/FAB';
import { Person24Regular } from '@fluentui/react-icons';
import UserPanel from '@element/UserPanel/UserPanel';
import Spinner from '@lib/Spinner/Spinner';

const SideBar: React.FC = () => {
  const [session, loading] = useSession();

  const handleSignin = (e: Event) => {
    e.preventDefault();
    signIn();
  };

  const validRoutes = session?.user?.email
    ? sideBarItems
    : sideBarItems.filter((item) => !protectedRoutes.includes(item.route));

  return (
    <div className={styles.sidebar}>
      <Link href="/">
        <div className={styles.sidebar_top}>
          <Logo />
        </div>
      </Link>

      <div className={styles.sidebar_mid}>
        {validRoutes.map((item) => (
          <SideBarItem key={item.route} Icon={item.Svg} route={item.route} text={item.text} />
        ))}
      </div>

      <div className={styles.sidebar_bottom}>
        {loading ? (
          <Spinner />
        ) : session ? (
          <UserPanel />
        ) : (
          <FAB onClick={handleSignin} Icon={Person24Regular} />
        )}
      </div>
    </div>
  );
};

export default SideBar;
