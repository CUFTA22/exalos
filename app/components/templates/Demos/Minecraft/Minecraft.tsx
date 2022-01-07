import Button from '@lib/Button/Button';
import TestScene from '@module/Demos/Minecraft/MinecraftScene';
import CustomCanvas from 'app/core/Canvas/CustomCanvas';
import styles from './Minecraft.module.scss';
import YouTubeIcon from '@assets/logos/youtube.svg';

const Minecraft: React.FC = () => {
  return (
    <div className={styles.pageThree_chest}>
      <CustomCanvas>
        <TestScene />
      </CustomCanvas>

      <Button
        className={styles.cta_link}
        text="Watch on YT"
        width={180}
        onClick={() => window.open('https://www.youtube.com/watch?v=gBsT7Ipu57U', '_blank')}
        Icon={YouTubeIcon}
      />
    </div>
  );
};

export default Minecraft;
