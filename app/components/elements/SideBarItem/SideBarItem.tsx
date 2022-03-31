import useSettings from '@module/Settings/useSettings';
import clsx from 'clsx';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React from 'react';
import classes from './SideBarItem.module.scss';
import { Props } from './types';

const SideBarItem: React.FC<Props> = ({ Svg, route, text, isNew, hidden }) => {
  const router = useRouter();
  const { enableHidden } = useSettings();

  const isActive = router.route.includes(route);

  if (hidden && !enableHidden) return null;

  return (
    <Link href={route}>
      <div className={clsx(classes.sidebar_item, { [classes.active]: isActive })}>
        <Svg />
        <div className={classes.txt}>{text}</div>
        {isNew && <div className={classes.new_chip}></div>}
      </div>
    </Link>
  );
};

export default SideBarItem;
