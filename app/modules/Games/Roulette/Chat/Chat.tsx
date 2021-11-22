import { Chat24Regular } from '@fluentui/react-icons';
import Card from '@lib/Card/Card';
import Input from '@lib/Input/Input';
import { useState } from 'react';
import useRoulette from '../useRoulette';
import styles from './Chat.module.scss';

const Chat = () => {
  const [message, setMessage] = useState<string>('');
  const { chat } = useRoulette();

  return (
    <Card className={styles.roulette_chat}>
      <Input
        value={message}
        onChange={setMessage}
        icons_front={[<Chat24Regular primaryFill="hsl(240, 28%, 64%)" />]}
        placeholder="Type in chat"
        width="100%"
      />
    </Card>
  );
};

export default Chat;
