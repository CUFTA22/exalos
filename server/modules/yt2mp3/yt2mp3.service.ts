import ytdl from 'ytdl-core';
import fs from 'fs';

export const getSong = async (url: string) => {
  const a = ytdl(url, { filter: 'audioonly' }).pipe(
    fs.createWriteStream('/server/music/video.mp3')
  );
};
