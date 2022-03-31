import { ConferenceRoom24Regular } from '@fluentui/react-icons';
import Avatar from '@lib/Avatar';
import Button from '@lib/Button/Button';
import Typography from '@lib/Typography/Typography';
import { useSession, signOut } from 'next-auth/react';
import { MouseEvent } from 'react';
import classes from './UserPanel.module.scss';

const UserPanel = () => {
  const { data: session } = useSession();

  const handleSignOut = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    signOut();
  };

  return (
    <div className={classes.user_panel}>
      <div className={classes.top}>
        <Typography text={session.user.email || 'No email attached 🙁'} />
      </div>

      <div className={classes.bottom}>
        <Avatar.Big className={classes.avatar} src={session.user.image} />

        <Button width={140} text="Logout" onClick={handleSignOut} Icon={ConferenceRoom24Regular} />
      </div>
    </div>
  );
};

export default UserPanel;
