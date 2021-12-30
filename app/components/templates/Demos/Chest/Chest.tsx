import Button from '@lib/Button/Button';
import TestScene from '@module/Demos/Chest/ChestScene';
import CustomCanvas from 'app/core/Canvas/CustomCanvas';
import styles from './Chest.module.scss';
import YouTubeIcon from '@assets/logos/youtube.svg';

const Chest: React.FC = () => {
  return (
    <div className={styles.pageThree_chest}>
      <CustomCanvas>
        <TestScene />
      </CustomCanvas>

      <Button
        className={styles.cta_link}
        text="Watch on YT"
        width={180}
        onClick={() => window.open('https://www.youtube.com/watch?v=ClUZKhYLeqc', '_blank')}
        Icon={YouTubeIcon}
      />
    </div>
  );
};

export default Chest;
