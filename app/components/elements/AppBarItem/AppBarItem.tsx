import clsx from 'clsx';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React from 'react';
import styles from './AppBarItem.module.scss';
import { Props } from './types';

const AppBarItem: React.FC<Props> = ({ Svg, route, text, isNew, options }) => {
  const router = useRouter();

  const isHome = route === '/';
  const isActive = !isHome ? router.route.includes(route) : router.route === '/';

  return (
    <Link href={route}>
      <div className={clsx(styles.appbar_item, { [styles.active]: isActive })}>
        <Svg />
        {/* <div className={styles.txt}>{text}</div> */}
      </div>
    </Link>
  );
};

export default AppBarItem;
