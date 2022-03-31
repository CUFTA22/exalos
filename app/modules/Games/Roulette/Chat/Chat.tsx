import { Chat24Regular } from '@fluentui/react-icons';
import Card from '@lib/Card/Card';
import Input from '@lib/Input/Input';
import Typography from '@lib/Typography/Typography';
import { useState } from 'react';
import useRoulette from '../useRoulette';
import classes from './Chat.module.scss';

const Chat = () => {
  const [message, setMessage] = useState<string>('');
  const { chat, sendMessage } = useRoulette();

  return (
    <Card className={classes.roulette_chat}>
      {chat.map((msg) => (
        <Card className={classes.chat_msg}>
          <Typography text={msg} color="secondary" />
        </Card>
      ))}

      <Input
        value={message}
        onChange={setMessage}
        icons_front={[<Chat24Regular primaryFill="hsl(240, 28%, 64%)" />]}
        placeholder="Type in chat"
        width="100%"
        onEnter={() => {
          setMessage('');
          sendMessage(message);
        }}
      />
    </Card>
  );
};

export default Chat;
