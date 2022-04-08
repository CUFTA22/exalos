import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  // useLogVisit();

  return <Component {...pageProps} />;
}
export default MyApp;
