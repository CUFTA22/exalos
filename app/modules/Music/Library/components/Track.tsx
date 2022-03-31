import { MusicNote224Filled } from '@fluentui/react-icons';
import Typography from '@lib/Typography/Typography';
import { ITrack } from '@utils/resources/musicData';
import clsx from 'clsx';
import classes from './Track.module.scss';

interface Props extends ITrack {
  selectTrack: (file: string) => void;
  currentSong: string;
}

const Track: React.FC<Props> = ({ channel, file, id, title, selectTrack, currentSong }) => {
  return (
    <div
      onClick={() => selectTrack(file)}
      className={clsx(classes.track, { [classes.isPlaying]: currentSong === file })}
    >
      <div className={classes.left}>
        <MusicNote224Filled />
      </div>
      <div style={{ WebkitLineClamp: 1 }} className={classes.info}>
        <Typography
          text={title}
          fSize={14}
          color="secondary"
          className={classes.title}
          maxLines={1}
          tag="div"
        />
        <Typography text={channel} fSize={10} color="secondary" className={classes.channel} />
      </div>
    </div>
  );
};

export default Track;
