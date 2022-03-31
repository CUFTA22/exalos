import { cryptoRandomNumber } from '@server/utils/functions';
import { musicData } from '@utils/resources/musicData';

export const calculateTime = (time: number) => {
  if (!time) return '0:00';

  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

export const getNextSongClick = (
  action: 'next' | 'prev',
  currentSong: string,
  isShuffle: boolean
) => {
  const currentId = musicData.find((track) => track.file === currentSong).id;
  let nextSong = ''; // file

  if (!isShuffle) {
    // No shuffle
    if (action === 'next') {
      // Next song
      const nextId = musicData.length === currentId ? 1 : currentId + 1;
      nextSong = musicData.find((track) => track.id === nextId).file;
    } else {
      // Previous song
      const nextId = currentId === 1 ? musicData.length : currentId - 1;
      nextSong = musicData.find((track) => track.id === nextId).file;
    }
  } else {
    const randId = cryptoRandomNumber(1, musicData.length);
    nextSong = musicData.find((track) => track.id === randId).file;
  }

  return nextSong;
};

export const getNextSongAutoplay = (
  action: 'next' | 'prev',
  currentSong: string,
  isShuffle: boolean
) => {};
