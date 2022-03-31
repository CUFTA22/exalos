import classes from './Shikinami.module.scss';
import gif from '@assets/static/shikinami.gif';
import { Props } from './types';

const Shikinami: React.FC<Props> = ({ disabled = true }) => {
  return <>{!disabled && <img src={gif.src} className={classes.gif} />}</>;
};

export default Shikinami;
