import React from 'react';
import styles from './SideBarItem.module.scss';
import { Props } from './types';

const SideBarItem: React.FC<Props> = ({ Icon, route, text }) => {
  return (
    <div className={styles.sidebarItem}>
      <Icon />
      <div className="txt">{text}</div>
    </div>
  );
};

export default SideBarItem;
