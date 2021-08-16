import Avatar from '@lib/Avatar';
import { useSession } from 'next-auth/client';
import styles from './UserPanel.module.scss';
const UserPanel = () => {
  const [session, loading] = useSession();

  return (
    <div className={styles.user_panel}>
      <Avatar.Big src={session.user.image} />
    </div>
  );
};

export default UserPanel;
