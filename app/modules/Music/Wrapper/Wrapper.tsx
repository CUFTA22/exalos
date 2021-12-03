import { MusicNote224Filled } from '@fluentui/react-icons';
import Card from '@lib/Card/Card';
import { useState } from 'react';
import Controls from '../Controls/Controls';
import Library from '../Library/Library';
import { initialState, State } from './types';
import styles from './Wrapper.module.scss';

const Wrapper = () => {
  const [state, setState] = useState<State>(initialState);

  // This is in separate state because of bug with requestAnimationFrame
  const [currentTime, setCurrentTime] = useState<number>(0);

  return (
    <div className={styles.music_wrapper}>
      <Library wrapperState={state} setWrapperState={setState} />

      <div className={styles.divider}></div>

      <Card className={styles.main_player}>
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
