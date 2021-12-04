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
import styles from './Wrapper.module.scss';
import clsx from 'clsx';
import Typography from '@lib/Typography/Typography';

const Wrapper = () => {
  const [state, setState] = useState<State>(initialState);

  // This is in separate state because of bug with requestAnimationFrame
  const [currentTime, setCurrentTime] = useState<number>(0);

  // For mobile navigation
  const [tab, setTab] = useState<'music' | 'library'>('library');

  return (
    <div className={clsx(styles.music_wrapper, styles[`tab_${tab}`])}>
      <Card className={styles.main_library}>
        <div className={styles.top}>
          <div style={{ width: '24px' }}></div>
          <Typography text="Library" fSize={16} />
          <ChevronRight24Filled onClick={() => setTab('music')} />
        </div>

        <Library setTab={setTab} wrapperState={state} setWrapperState={setState} />
      </Card>

      <div className={styles.divider}></div>

      <Card className={styles.main_player}>
        <div className={styles.top}>
          <ChevronLeft24Filled onClick={() => setTab('library')} />
          <Typography text="Player" fSize={16} />
          <div style={{ width: '24px' }}></div>
        </div>

        <div className={styles.animation}>
          <MusicNote224Filled />
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