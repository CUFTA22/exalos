import React from 'react';
import styles from './AppBar.module.scss';
import { appBarItems } from 'app/utils/resources/sideBarData';
import AppBarItem from '@element/AppBarItem/AppBarItem';

const AppBar: React.FC = () => {
  return (
    <div className={styles.appbar}>
      {appBarItems.map((item) => (
        <AppBarItem
          key={item.route}
          Svg={item.Svg}
          route={item.route}
          text={item.text}
          isNew={item.route === '/finances'}
        />
      ))}
    </div>
  );
};

export default AppBar;
