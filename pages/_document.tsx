import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icons/icon-512x512.png" />
          <meta name="theme-color" content="#91cbf8" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://exalos.vercel.app" />
          <meta name="twitter:title" content="Exalos" />
          <meta name="twitter:description" content="App Description" />
          <meta name="twitter:image" content="https://exalos.vercel.app/icons/icon-192x192.png" />
          <meta name="twitter:creator" content="@twitter" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Exalos" />
          <meta property="og:description" content="App Description" />
          <meta property="og:site_name" content="Exalos" />
          <meta property="og:url" content="https://exalos.vercel.app" />
          <meta property="og:image" content="https://exalos.vercel.app/icons/icon-192x192.png" />
        </Head>
        <body>
          {/* Here we will mount our modal portal */}
          <div id="modals" />

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
