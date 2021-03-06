import {
  ArrowExportLtr24Filled,
  ArrowRepeatAll24Filled,
  ArrowSwap24Filled,
  Next24Filled,
  Pause24Filled,
  Play24Filled,
  Previous24Filled,
  Speaker024Filled,
  Speaker124Filled,
  Speaker224Filled,
  SpeakerMute24Filled,
} from '@fluentui/react-icons';
import useEventListener from '@hooks/useEventListener';
import { useNonInitialEffect } from '@hooks/useNonInitialEffect';
import useScreenSize from '@hooks/useScreenSize';
import FAB from '@lib/FAB/FAB';
import SimpleFAB from '@lib/SimpleFAB/SimpleFAB';
import Slider from '@lib/Slider/Slider';
import Typography from '@lib/Typography/Typography';
import React, { useEffect, useRef } from 'react';
import Audio from '../Audio/Audio';
import { calculateTime, getNextSongClick } from '../utils';
import { State } from '../Wrapper/types';
import classes from './Controls.module.scss';
import { Props } from './types';

const Controls: React.FC<Props> = ({
  setWrapperState,
  wrapperState,
  currentTime,
  setCurrentTime,
}) => {
  const screenSize = useScreenSize();
  const isMobile = screenSize?.screen === 'xs';

  const { duration, isPlaying, volume, currentSong, isShuffle, isRepeat, isAutoplay } =
    wrapperState;

  const audioRef = useRef<HTMLAudioElement>();
  const sliderRef = useRef<HTMLInputElement>();
  const volumeRef = useRef<HTMLInputElement>();
  const volumeOuterRef = useRef<HTMLDivElement>();
  const animRef = useRef<any>();

  // -------------------------------------------------------------------------
  // Action - Change song
  // -------------------------------------------------------------------------

  const changeSong = (action: 'next' | 'prev') => {
    const nextSong = getNextSongClick(action, currentSong, isShuffle);
    setWrapperState({ ...wrapperState, currentSong: nextSong });

    sliderRef.current.value = '0';
    setCurrentTime(0);
  };

  // -------------------------------------------------------------------------
  // Effect - Update slider while playing song each second
  // -------------------------------------------------------------------------

  const whilePlaying = () => {
    if (
      audioRef.current.currentTime > parseInt(sliderRef.current.value) + 0.5 ||
      audioRef.current.currentTime === 0
    ) {
      sliderRef.current.value = audioRef.current.currentTime.toString();
      setCurrentTime(parseInt(sliderRef.current.value));
    }

    // Autoplay
    if (audioRef.current.currentTime === audioRef?.current?.duration && isAutoplay) {
      setTimeout(() => {
        changeSong('next');
      }, 2000);
    }

    animRef.current = requestAnimationFrame(whilePlaying);
  };

  // -------------------------------------------------------------------------
  // Action - Play/Pause
  // -------------------------------------------------------------------------

  const togglePlaying = (viaKey?: boolean) => {
    if (isPlaying) {
      !viaKey && audioRef.current.pause();
      cancelAnimationFrame(animRef.current);
    } else {
      !viaKey && audioRef.current.play();
      animRef.current = requestAnimationFrame(whilePlaying);
    }

    setWrapperState({ ...wrapperState, isPlaying: !isPlaying });
  };

  // -------------------------------------------------------------------------
  // Action - Play/Pause
  // -------------------------------------------------------------------------

  const updateCurrentTime = (newVal?: number) => {
    // It just pauses if it ends and you change time
    if (audioRef.current.ended) audioRef.current.play();
    if (newVal) sliderRef.current.value = newVal.toString();

    audioRef.current.currentTime = newVal || parseInt(sliderRef.current.value);
    setCurrentTime(newVal || parseInt(sliderRef.current.value));
  };

  // -------------------------------------------------------------------------
  // Action - Toggle state
  // -------------------------------------------------------------------------

  const toggleState = (field: keyof State) => {
    setWrapperState({ ...wrapperState, [field]: !wrapperState[field] });
  };

  // -------------------------------------------------------------------------
  // Action - Update volume
  // -------------------------------------------------------------------------

  const updateVolume = (newVal?: number) => {
    const volume =
      newVal !== undefined ? newVal : parseInt(volumeRef.current.value) / (isMobile ? 20 : 100);

    console.log(volume);

    if (newVal !== undefined) volumeRef.current.value = (newVal * (isMobile ? 20 : 100)).toString();

    audioRef.current.volume = volume;
    setWrapperState({ ...wrapperState, volume });
  };

  // -------------------------------------------------------------------------
  // Event Listener - Key contorls
  // -------------------------------------------------------------------------

  useEventListener('keydown', (e: KeyboardEvent) => {
    e.code === 'Space' && togglePlaying();
    e.code === 'ArrowLeft' && updateCurrentTime(currentTime - 5);
    e.code === 'ArrowRight' && updateCurrentTime(currentTime + 5);
    e.code === 'ArrowUp' && updateVolume(volume < 0.19 ? volume + 0.01 : 0.2);
    e.code === 'ArrowDown' && updateVolume(volume > 0.02 ? volume - 0.01 : 0);
    e.code === 'KeyM' && updateVolume(0);
  });

  // -------------------------------------------------------------------------
  // Effect - Update song duration
  // -------------------------------------------------------------------------

  useEffect(() => {
    if (!audioRef?.current) return;

    const seconds = Math.floor(audioRef?.current?.duration);
    setWrapperState({ ...wrapperState, duration: calculateTime(seconds) });

    sliderRef.current.max = `${seconds}`;
    audioRef.current.volume = volume;
  }, [audioRef?.current?.onloadedmetadata, audioRef?.current?.readyState]);

  // -------------------------------------------------------------------------
  // Effect - When we change the song
  // -------------------------------------------------------------------------

  useNonInitialEffect(() => {
    // if (!audioRef) return;

    audioRef.current.currentTime = 0;
    setCurrentTime(0);
    audioRef.current.load();
    audioRef.current.play();

    if (!isPlaying) {
      togglePlaying();
    }
  }, [currentSong]);

  // -------------------------------------------------------------------------
  // Effect - When we play/pause via key - "MediaPlayPause"
  // -------------------------------------------------------------------------

  const onPlayPause = () => {
    if (audioRef?.current?.paused !== !isPlaying) togglePlaying(true);
  };

  return (
    <div className={classes.music_controls}>
      <div className={classes.slider}>
        <div className={classes.autoplay}>
          <SimpleFAB
            onClick={() => toggleState('isAutoplay')}
            isActive={isAutoplay}
            Icon={<ArrowExportLtr24Filled />}
            className={classes.action}
          />
        </div>

        <div className={classes.duration}>
          <Typography
            text={`${calculateTime(currentTime)}`}
            color="secondary"
            className={classes.time}
          />
          <Slider ref={sliderRef} onChange={updateCurrentTime} defaultValue={currentTime} />
          <Typography text={`${duration}`} color="secondary" className={classes.time} />
        </div>

        <div ref={volumeOuterRef} className={classes.volume}>
          <Slider
            ref={volumeRef}
            className={classes.volume_slider}
            isVertical
            onChange={() => updateVolume()}
            min={0}
            max={20}
          />
          {volume > 0.15 ? (
            <Speaker224Filled onClick={() => !isMobile && updateVolume(0)} />
          ) : volume > 0.075 ? (
            <Speaker124Filled onClick={() => !isMobile && updateVolume(0)} />
          ) : volume > 0 ? (
            <Speaker024Filled onClick={() => !isMobile && updateVolume(0)} />
          ) : (
            <SpeakerMute24Filled />
          )}
        </div>
      </div>

      <div className={classes.actions}>
        <SimpleFAB
          onClick={() => toggleState('isShuffle')}
          isActive={isShuffle}
          Icon={<ArrowSwap24Filled />}
          size="large"
          className={classes.action}
        />

        <SimpleFAB
          onClick={() => changeSong('prev')}
          Icon={<Previous24Filled />}
          size="large"
          className={classes.action}
        />

        <FAB
          Icon={isPlaying ? Pause24Filled : Play24Filled}
          onClick={() => togglePlaying()}
          className={classes.action}
        />

        <SimpleFAB
          onClick={() => changeSong('next')}
          Icon={<Next24Filled />}
          size="large"
          className={classes.action}
        />

        <SimpleFAB
          onClick={() => toggleState('isRepeat')}
          isActive={isRepeat}
          Icon={<ArrowRepeatAll24Filled />}
          size="large"
          className={classes.action}
        />
      </div>

      <Audio ref={audioRef} song={currentSong} loop={isRepeat} onPlayPause={onPlayPause} />
    </div>
  );
};

export default Controls;
