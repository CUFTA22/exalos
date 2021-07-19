import '../app/styles/base/_base.scss';
import type { AppProps } from 'next/app';
import Cursor from '@element/Cursor/Cursor';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Cursor />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
