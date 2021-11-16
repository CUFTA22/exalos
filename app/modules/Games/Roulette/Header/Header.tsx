import { Star20Filled, Star20Regular } from '@fluentui/react-icons';
import Typography from '@lib/Typography/Typography';
import useRoulette from '../useRoulette';
import styles from './Header.module.scss';

const Header = () => {
  const { coins } = useRoulette();

  return (
    <div className={styles.roulette_header}>
      <div className={styles.left}></div>
      <div className={styles.right}>
        <Star20Filled />
        <Typography className={styles.coins} text={`${coins}`} color="secondary" />
      </div>
    </div>
  );
};

export default Header;
