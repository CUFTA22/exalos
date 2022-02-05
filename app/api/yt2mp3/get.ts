import { ApiResponse } from '@ts/apiRes.types';
import { Planner_Data } from '@ts/planner.types';
import useFetch from '../useFetch';

const getYTSong = async (url: string) => {
  const res = await useFetch().get('/api/yt2mp3?url=' + url);
  return res;
};

export default getYTSong;
