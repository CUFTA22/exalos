import clsx from 'clsx';
import Image, { ImageProps } from 'next/image';
import classes from './styles.module.scss';

const Medium: React.FC<ImageProps> = ({ src, className }) => {
  const size = 30;
  return (
    <div className={clsx(classes.lib_avatar, classes.lib_avatar_md, className)}>
      <Image className={classes.img} width={size} height={size} src={src} alt="User avatar" />
    </div>
  );
};

export default Medium;
