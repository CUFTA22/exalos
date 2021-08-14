// import { protectedRoutes } from 'app/utils/resources/sideBarData';
import clsx from 'clsx';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React from 'react';
import styles from './SideBarItem.module.scss';
import { Props } from './types';

const SideBarItem: React.FC<Props> = ({ Icon, route, text }) => {
  const router = useRouter();
  const isActive = router.route === route;

  // if (protectedRoutes.includes(route)) return null;

  return (
    <Link href={route}>
      <div className={clsx(styles.sidebar_item, { [styles.active]: isActive })}>
        <Icon />
        <div className="txt">{text}</div>
      </div>
    </Link>
  );
};

export default SideBarItem;
