import {
  Html, Head, Main, NextScript,
} from 'next/document';


export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          type="image/png"
          href="https://cdn.jolipage.co/5c1376c5-e4cd-4250-b760-4c810d7f5fdd/fdf058fa-5faf-4c83-bffa-4faa42b6d252/dc8ef1f26116405e2b275c5020ad8ce1ac071f86bf2134f143c23e692e396f76.png"
        />
        <title>Next Cloudimage Responsive</title>
        <meta name="description" content="cloudimage responsive family" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
