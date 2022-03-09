import ytdl from 'ytdl-core';

export const getSongInfo = async (url: string) => {
  const info = await ytdl.getBasicInfo(url);

  return info;
};
