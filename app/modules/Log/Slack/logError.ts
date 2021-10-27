import sendSlackMsg from './sendSlackMsg';

const URL = process.env.NEXT_PUBLIC_SLACK_LOG_APP_ERR

const logError = (error: any) => {
  sendSlackMsg(URL,{
    channel: '#errors-app',
    text: `
    An error has occurred!
    
    \`\`\`
    ${error}
    \`\`\`
    `,
  });
};

export default logError;
