import Input from '@lib/Input/Input';
import { useState } from 'react';
import useRoulette from '../useRoulette';
import styles from './Chat.module.scss';

const Chat = () => {
  const [message, setMessage] = useState<string>('');
  const { chat } = useRoulette();

  return (
    <div className={styles.roulette_chat}>
      <Input value={message} onChange={setMessage} placeholder="Type in chat" width="100%" />
    </div>
  );
};

export default Chat;
