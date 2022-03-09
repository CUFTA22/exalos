const getYTSong = async (url: string) => {
  const fetchSong = fetch('/api/yt2mp3?url=' + url, { method: 'GET' });
  const fetchInfo = fetch('/api/yt2mp3/info?url=' + url, { method: 'GET' });

  const [res1, res2] = await Promise.all([fetchInfo, fetchSong]);

  const infoData = await res1.json();
  const songBuffer = await res2.arrayBuffer();

  return { info: infoData, buffer: songBuffer };
};

export default getYTSong;
