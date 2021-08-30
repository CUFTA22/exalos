import '@styles/base/_base.scss';
import '@styles/base/_transitions.scss';

import { Provider } from 'next-auth/client';
import type { AppProps } from 'next/app';
import Cursor from 'app/modules/Cursor/Cursor';
import useSettings from '@module/Settings/useSettings';

function MyApp({ Component, pageProps }: AppProps) {
  const { settings } = useSettings();

  console.log(process.env.NEXT_PUBLIC_URL);

  return (
    <>
      <Provider
        options={{
          // Client Max Age controls how often the useSession in the client should
          // contact the server to sync the session state. Value in seconds.
          clientMaxAge: 60 * 10,
          // Keep Alive tells windows / tabs that are signed in to keep sending
          // a keep alive request (which extends the current session expiry) to
          // prevent sessions in open windows from expiring. Value in seconds.
          keepAlive: 60 * 10,
        }}
        session={pageProps.session}
      >
        <Cursor disabled={!settings.customCursor} />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
export default MyApp;
