import { Dismiss24Regular } from '@fluentui/react-icons';
import clsx from 'clsx';
import React, { useState } from 'react';
import classes from './notification.module.scss';
import { handleSVGIcon } from './utils';

export interface Notif {
  type: 'success' | 'warning' | 'error' | 'info';
  message: string;
}

const useNotification = () => {
  const [list, setList] = useState<Notif[]>([]);

  const notify = (args?: Notif) => {
    if (!args) return;
    setList([...list, args]);
  };

  const Notification = (args?: Notif) => {
    return (
      <div className={clsx(classes.notify, classes[args.type])}>
        {handleSVGIcon[args.type]}
        <div className={classes.notify_msg}>{args.message}</div>
        <Dismiss24Regular />
      </div>
    );
  };

  const NotificationContainer: React.FC<{ arr: Notif[] }> = ({ arr }) => {
    return (
      <div className={classes.notify_container}>
        {list.map((notif, i) => (
          <Notification key={i} {...notif} />
        ))}
      </div>
    );
  };

  return { list, notify, NotificationContainer };
};

export default useNotification;
