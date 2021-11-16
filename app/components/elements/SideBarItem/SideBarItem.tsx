import clsx from 'clsx';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React from 'react';
import styles from './SideBarItem.module.scss';
import { Props } from './types';

const SideBarItem: React.FC<Props> = ({ Svg, route, text, isNew, options }) => {
  const router = useRouter();
  const isActive = router.route.includes(route);

  return (
    <Link href={route}>
      <div className={clsx(styles.sidebar_item, { [styles.active]: isActive })}>
        <Svg />
        <div className={styles.txt}>{text}</div>
        {isNew && <div className={styles.new_chip}></div>}
      </div>
    </Link>
  );
};

export default SideBarItem;
