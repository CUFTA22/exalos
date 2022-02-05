import styles from './Shikinami.module.scss';
import gif from '@assets/static/shikinami.gif';
import { Props } from './types';

const Shikinami: React.FC<Props> = ({ disabled = true }) => {
  return <>{!disabled && <img src={gif.src} className={styles.gif} />}</>;
};

export default Shikinami;
