import Card from '@lib/Card/Card';
import Typography from '@lib/Typography/Typography';
import { musicData } from '@utils/resources/musicData';
import Track from './components/Track';
import styles from './Library.module.scss';
import { Props } from './types';

const Library: React.FC<Props> = ({ setWrapperState, wrapperState, setTab }) => {
  const selectTrack = (file: string) => {
    setTab('music');
    setWrapperState({ ...wrapperState, currentSong: file });
  };

  return (
    <div className={styles.music_library}>
      <Typography className={styles.title} text="Music Library" fSize={24} color="secondary" />

      <div className={styles.tracks}>
        {musicData.map((track) => (
          <Track {...track} selectTrack={selectTrack} currentSong={wrapperState.currentSong} />
        ))}
      </div>
    </div>
  );
};

export default Library;
