import Card from '@lib/Card/Card';
import Typography from '@lib/Typography/Typography';
import { musicData } from '@utils/resources/musicData';
import Track from './components/Track';
import classes from './Library.module.scss';
import { Props } from './types';

const Library: React.FC<Props> = ({ setWrapperState, wrapperState, setTab }) => {
  const selectTrack = (file: string) => {
    setTab('music');
    setWrapperState({ ...wrapperState, currentSong: file });
  };

  return (
    <div className={classes.music_library}>
      <Typography className={classes.title} text="Music Library" fSize={24} color="secondary" />

      <div className={classes.tracks}>
        {musicData.map((track) => (
          <Track
            {...track}
            key={track.id}
            selectTrack={selectTrack}
            currentSong={wrapperState.currentSong}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
