import useSettings from '@module/Settings/useSettings';
import clsx from 'clsx';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React from 'react';
import styles from './AppBarItem.module.scss';
import { Props } from './types';

const AppBarItem: React.FC<Props> = ({ Svg, route, text, isNew, hidden }) => {
  const router = useRouter();
  const { enableHidden } = useSettings();

  const isHome = route === '/';
  const isActive = !isHome ? router.route.includes(route) : router.route === '/';

  if (hidden && !enableHidden) return null;

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
