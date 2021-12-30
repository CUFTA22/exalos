import '@styles/base/_base.scss';
import '@styles/base/_lib.scss';
import '@styles/base/_transitions.scss';

import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import Cursor from '@module/Cursor/Cursor';
import useSettings from '@module/Settings/useSettings';
import useLogVisit from '@module/Log/Slack/useLogVisit';

function MyApp({ Component, pageProps }: AppProps) {
  // useLogVisit();
  const { settings } = useSettings();

  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Cursor disabled={!settings.customCursor} />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
export default MyApp;
