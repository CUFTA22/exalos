import React from 'react';
import { signIn, useSession } from 'next-auth/react';
import classes from './SideBar.module.scss';
import Logo from '@assets/logos/exalos.svg';
import { protectedRoutes, sideBarItems } from 'app/utils/resources/sideBarData';
import SideBarItem from '@element/SideBarItem/SideBarItem';
import Link from 'next/link';
import FAB from '@lib/FAB/FAB';
import { Person24Regular } from '@fluentui/react-icons';
import UserPanel from '@element/UserPanel/UserPanel';
import Spinner from '@lib/Spinner/Spinner';

const SideBar: React.FC = () => {
  const { data: session, status } = useSession();

  const validRoutes = session?.user?.email
    ? sideBarItems
    : sideBarItems.filter((item) => !protectedRoutes.includes(item.route));

  return (
    <div className={classes.sidebar}>
      <Link href="/">
        <div className={classes.sidebar_top}>
          <Logo />
        </div>
      </Link>

      <div className={classes.sidebar_mid}>
        {validRoutes.map((item) => (
          <SideBarItem key={item.route} {...item} />
        ))}
      </div>

      <div className={classes.sidebar_bottom}>
        {status === 'loading' ? (
          <Spinner />
        ) : session ? (
          <UserPanel />
        ) : (
          <FAB onClick={signIn} Icon={Person24Regular} />
        )}
      </div>
    </div>
  );
};

export default SideBar;
