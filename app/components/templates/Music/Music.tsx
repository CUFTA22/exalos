import MusicApp from '@module/Music/Wrapper/Wrapper';
import styles from './Music.module.scss';

const Music = () => {
  return (
    <div className={styles.page_music}>
      <MusicApp />
    </div>
  );
};

export default Music;
