import { musicData } from '@utils/resources/musicData';
import React from 'react';
import { Props } from './types';

const Audio: React.FC<Props> = React.forwardRef<HTMLAudioElement, Props>(
  ({ song = musicData[0].file, loop, onPlayPause }, ref) => {
    return (
      <audio
        id="exalos-audio-player"
        ref={ref}
        src={process.env.NEXT_PUBLIC_URL + song}
        loop={loop}
        preload="metadata"
        onPlay={() => onPlayPause()}
        onPause={() => onPlayPause()}
      ></audio>
    );
  }
);

export default Audio;
