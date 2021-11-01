import useFetch from 'app/api/useFetch';
const client = useFetch();

const SLACK_TOKEN = process.env.SLACK_TOKEN;
const URL = 'https://slack.com/api/chat.postMessage';

const sendSlackMsg = async () => {
  const res = await client.post(
    URL,
    {
      channel: '#log-visit',
      text: 'Hello, World!',
      username: 'Exalos Bot',
    },
    { authorization: `Bearer ${SLACK_TOKEN}` }
  );
};

export default sendSlackMsg;
