interface Args {
  channel: string;
  text?: string;
  blocks?: any;
}

const sendSlackMsg = async (url: string, args: Args) => {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      ...args,
      username: 'Exalos Bot',
    }),
  }).catch((err) => {});
};

export default sendSlackMsg;
