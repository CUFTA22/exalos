import ytdl from 'ytdl-core';

export const getSong = async (url: string) => {
  const file = ytdl(url, { filter: 'audioonly' });

  return file;
};
