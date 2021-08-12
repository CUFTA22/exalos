import '@styles/base/_base.scss';
import '@styles/base/_transitions.scss';
import type { AppProps } from 'next/app';
import Cursor from 'app/modules/Cursor/Cursor';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Cursor disabled />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
