import { musicData } from '@utils/resources/musicData';
import React from 'react';
import { Props } from './types';

const Audio: React.FC<Props> = React.forwardRef<HTMLAudioElement, Props>(
  ({ song = musicData[0].file, loop, onPlayPause }, ref) => {
    const songUrl: string = process.env.NEXT_PUBLIC_STATIC_URL + song;

    return (
      <audio
        id="exalos-audio-player"
        ref={ref}
        // src={songUrl}
        loop={loop}
        preload="metadata"
        crossOrigin="anonymous"
        onPlay={() => onPlayPause()}
        onPause={() => onPlayPause()}
      >
        <source id="mp4_src" src={songUrl} type="audio/mp3"></source>
      </audio>
    );
  }
);

export default Audio;
