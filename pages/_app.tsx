import '@styles/base/_base.scss';
import '@styles/base/_lib.scss';
import '@styles/base/_transitions.scss';

import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import useLogVisit from '@module/Log/Slack/useLogVisit';
import { GlobalCTXProvider } from 'app/store/global/CTX';
import usePepe from '@utils/functions/pepe';

function MyApp({ Component, pageProps }: AppProps) {
  // useLogVisit();

  usePepe();

  return (
    <>
      <SessionProvider session={pageProps.session}>
        <GlobalCTXProvider>
          <Component {...pageProps} />
        </GlobalCTXProvider>
      </SessionProvider>
    </>
  );
}
export default MyApp;
