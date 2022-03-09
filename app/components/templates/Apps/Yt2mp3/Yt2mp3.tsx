import Button from '@lib/Button/Button';
import Card from '@lib/Card/Card';
import Input from '@lib/Input/Input';
import Typography from '@lib/Typography/Typography';
import { downloadFile } from '@utils/functions/downloadFile';
import getYTSong from 'app/api/yt2mp3/get';
import { useState } from 'react';
import styles from './Yt2mp3.module.scss';

const Yt2mp3 = () => {
  const [song, setSong] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);

    getYTSong(song).then((res) => {
      setLoading(false);

      const { buffer, info } = res;

      const songName = info?.data?.videoDetails?.title;

      downloadFile(buffer, songName, 'audio/mp3');
    });
  };

  return (
    <div className={styles.page_yt2mp3}>
      <Card className={styles.center}>
        <Typography
          className={styles.title}
          text="Yt2mp3"
          color="primary"
          fSize={36}
          fWeight={600}
        />

        <Input
          className={styles.yt2mp3_input}
          value={song}
          onChange={setSong}
          placeholder="Song URL..."
        />

        <Button className={styles.cta} text="Download" onClick={handleSubmit} isLoading={loading} />
      </Card>
    </div>
  );
};

export default Yt2mp3;
