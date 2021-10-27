import useBrowser from '@hooks/useBrowser';
import { useEffect } from 'react';
import sendSlackMsg from './sendSlackMsg';

const URL = process.env.NEXT_PUBLIC_SLACK_LOG_VISIT;

const useLogVisit = () => {
  const isBrowser = useBrowser();

  const fingerprint = isBrowser && [
    `*User Agent*\n${navigator.userAgent}`,
    `*Platform*\n${navigator.platform}`,
    `*Resolution*\n${window.screen.width}x${window.screen.height}`,
  ];

  useEffect(() => {
    isBrowser &&
      sendSlackMsg(URL, {
        channel: '#log-visit',
        blocks: [
          {
            type: 'section',
            text: { type: 'mrkdwn', text: 'New visitor!' },
            fields: fingerprint.map((item) => ({ type: 'mrkdwn', text: item })),
          },
        ],
      });
  }, [isBrowser]);
};

export default useLogVisit;
