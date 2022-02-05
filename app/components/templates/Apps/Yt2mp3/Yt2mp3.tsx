import Button from '@lib/Button/Button';
import Card from '@lib/Card/Card';
import Input from '@lib/Input/Input';
import getYTSong from 'app/api/yt2mp3/get';
import { useState } from 'react';
import styles from './Yt2mp3.module.scss';

const Yt2mp3 = () => {
  const [song, setSong] = useState('');

  const handleSubmit = () => {
    const urlParts = song.split('/');
    const vidId = urlParts[urlParts.length - 1];

    getYTSong(song);
  };

  return (
    <div className={styles.page_yt2mp3}>
      <Card className={styles.center}>
        <Input value={song} onChange={setSong} placeholder="Song URL..." />

        <div className={styles.cta}>
          <Button text="Download" onClick={handleSubmit} />
        </div>
      </Card>
    </div>
  );
};

export default Yt2mp3;
