import { musicData } from '@utils/resources/musicData';

export interface State {
  isPlaying: boolean;
  isShuffle: boolean;
  isRepeat: boolean;
  isAutoplay: boolean;

  volume: number;
  duration: string;
  currentSong: string;
}

export const initialState: State = {
  isPlaying: false,
  isShuffle: false,
  isRepeat: false,
  isAutoplay: false,

  volume: 0.1,
  duration: '0',
  currentSong: musicData[0].file,
};
