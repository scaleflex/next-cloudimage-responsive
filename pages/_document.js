import {
  Html, Head, Main, NextScript,
} from 'next/document';


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="shortcut icon"
          type="image/png"
          href="/favicon.webp"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          href="/favicon.webp"
        />
        <meta name="description" content="cloudimage responsive family" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
