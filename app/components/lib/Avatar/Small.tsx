import clsx from 'clsx';
import Image from 'next/image';
import styles from './styles.module.scss';

const Small = ({ src }) => {
  const size = 20;
  return (
    <div className={clsx(styles.lib_avatar, styles.lib_avatar_sm)}>
      <Image className={styles.img} width={size} height={size} src={src} alt="User avatar" />
    </div>
  );
};

export default Small;
