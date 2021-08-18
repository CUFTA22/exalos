import { ConferenceRoom24Regular } from '@fluentui/react-icons';
import Avatar from '@lib/Avatar';
import Button from '@lib/Button/Button';
import Typography from '@lib/Typography/Typography';
import { useSession, signOut } from 'next-auth/client';
import styles from './UserPanel.module.scss';
const UserPanel = () => {
  const [session] = useSession();

  return (
    <div className={styles.user_panel}>
      <div className={styles.top}>
        <Typography text={session.user.email} />
      </div>

      <div className={styles.bottom}>
        <Avatar.Big className={styles.avatar} src={session.user.image} />
        <Button onClick={signOut} width={140} text="Logout" Icon={ConferenceRoom24Regular} />
      </div>
    </div>
  );
};

export default UserPanel;
