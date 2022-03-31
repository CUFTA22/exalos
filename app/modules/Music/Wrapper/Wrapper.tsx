import {
  ChevronLeft24Filled,
  ChevronRight24Filled,
  MusicNote224Filled,
} from '@fluentui/react-icons';
import Card from '@lib/Card/Card';
import { useState } from 'react';
import Controls from '../Controls/Controls';
import Library from '../Library/Library';
import { initialState, State } from './types';
import classes from './Wrapper.module.scss';
import clsx from 'clsx';
import Typography from '@lib/Typography/Typography';
import Visualizer from '../Visualizer/Visualizer';
import { musicData } from '@utils/resources/musicData';

const Wrapper = () => {
  const [state, setState] = useState<State>(initialState);

  // This is in separate state because of bug with requestAnimationFrame
  const [currentTime, setCurrentTime] = useState<number>(0);

  // For mobile navigation
  const [tab, setTab] = useState<'music' | 'library'>('library');

  return (
    <div className={clsx(classes.music_wrapper, classes[`tab_${tab}`])}>
      <Card className={classes.main_library}>
        <div className={classes.top}>
          <div style={{ width: '24px' }}></div>
          <Typography text="Library" fSize={18} />
          <ChevronRight24Filled onClick={() => setTab('music')} />
        </div>

        <Library setTab={setTab} wrapperState={state} setWrapperState={setState} />
      </Card>

      <div className={classes.divider}></div>

      <Card className={classes.main_player}>
        <div className={classes.top}>
          <ChevronLeft24Filled onClick={() => setTab('library')} />
          <Typography
            maxLines={1}
            text={musicData.find((t) => t.file === state.currentSong).title}
            fSize={18}
            width="60%"
          />
          <div style={{ width: '24px' }}></div>
        </div>

        <div className={classes.animation}>
          <div className={classes.note}>
            <MusicNote224Filled />
          </div>
          <Visualizer wrapperState={state} />
        </div>

        <Controls
          wrapperState={state}
          setWrapperState={setState}
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
        />
      </Card>
    </div>
  );
};

export default Wrapper;
