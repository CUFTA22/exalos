import Card from '@lib/Card/Card';
import Typography from '@lib/Typography/Typography';
import { musicData } from '@utils/resources/musicData';
import Track from './components/Track';
import styles from './Library.module.scss';
import { Props } from './types';

const Library: React.FC<Props> = ({ setWrapperState, wrapperState }) => {
  const selectTrack = (file: string) => {
    setWrapperState({ ...wrapperState, currentSong: file });
  };

  return (
    <Card className={styles.music_library}>
      <Typography text="Music Library" fSize={24} color="secondary" />

      <div className={styles.tracks}>
        {musicData.map((track) => (
          <Track {...track} selectTrack={selectTrack} currentSong={wrapperState.currentSong} />
        ))}
      </div>
    </Card>
  );
};

export default Library;
