import React from 'react';
import classes from './AppBar.module.scss';
import { appBarItems } from 'app/utils/resources/sideBarData';
import AppBarItem from '@element/AppBarItem/AppBarItem';

const AppBar: React.FC = () => {
  return (
    <div className={classes.appbar}>
      {appBarItems.map((item) => (
        <AppBarItem key={item.route} {...item} />
      ))}
    </div>
  );
};

export default AppBar;
