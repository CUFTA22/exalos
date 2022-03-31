import MusicApp from '@module/Music/Wrapper/Wrapper';
import classes from './Music.module.scss';

const Music = () => {
  return (
    <div className={classes.page_music}>
      <MusicApp />
    </div>
  );
};

export default Music;
