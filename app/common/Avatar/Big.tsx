import clsx from 'clsx';
import Image, { ImageProps } from 'next/image';
import styles from './styles.module.scss';

const Big: React.FC<ImageProps> = ({ src, className }) => {
  const size = 40;
  return (
    <div className={clsx(styles.lib_avatar, styles.lib_avatar_lg, className)}>
      <Image className={styles.img} width={size} height={size} src={src} alt="User avatar" />
    </div>
  );
};

export default Big;
