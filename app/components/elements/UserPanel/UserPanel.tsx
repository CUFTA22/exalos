import { ConferenceRoom24Regular } from '@fluentui/react-icons';
import Avatar from '@lib/Avatar';
import Button from '@lib/Button/Button';
import Typography from '@lib/Typography/Typography';
import { useSession, signOut } from 'next-auth/react';
import { MouseEvent } from 'react';
import styles from './UserPanel.module.scss';

const UserPanel = () => {
  const { data: session } = useSession();

  const handleSignOut = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    signOut();
  };

  return (
    <div className={styles.user_panel}>
      <div className={styles.top}>
        <Typography text={session.user.email || 'No email attached 🙁'} />
      </div>

      <div className={styles.bottom}>
        <Avatar.Big className={styles.avatar} src={session.user.image} />

        <Button width={140} text="Logout" onClick={handleSignOut} Icon={ConferenceRoom24Regular} />
      </div>
    </div>
  );
};

export default UserPanel;
