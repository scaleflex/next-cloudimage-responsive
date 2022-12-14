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
          href="https://cdn.jolipage.co/5c1376c5-e4cd-4250-b760-4c810d7f5fdd/fdf058fa-5faf-4c83-bffa-4faa42b6d252/dc8ef1f26116405e2b275c5020ad8ce1ac071f86bf2134f143c23e692e396f76.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          href="https://cdn.jolipage.co/5c1376c5-e4cd-4250-b760-4c810d7f5fdd/fdf058fa-5faf-4c83-bffa-4faa42b6d252/dc8ef1f26116405e2b275c5020ad8ce1ac071f86bf2134f143c23e692e396f76.png"
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
