import clsx from 'clsx';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React from 'react';
import styles from './SideBarItem.module.scss';
import { Props } from './types';

const SideBarItem: React.FC<Props> = ({ Icon, route, text }) => {
  const router = useRouter();
  const isActive = router.route === route;

  return (
    <Link href={route}>
      <div className={clsx(styles.sidebarItem, { [styles.active]: isActive })}>
        <Icon />
        <div className="txt">{text}</div>
      </div>
    </Link>
  );
};

export default SideBarItem;
