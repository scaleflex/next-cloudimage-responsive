import Head from 'next/head';
import { useRef } from 'react';
import Header from '../demo/components/header';
import Content from '../demo/components/content';
import Usage from '../demo/components/usage';
import Gallery from '../demo/components/gallery';
import Crop from '../demo/components/crop';
import Sizes from '../demo/components/sizes';
import BackgroundSection from '../demo/components/background-section';
import Questions from '../demo/components/questions';
import Footer from '../demo/components/footer';
import ScreenInfo from '../demo/components/screen-info';


export default function Home() {
  const footerRef = useRef();

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" href="https://cdn.jolipage.co/5c1376c5-e4cd-4250-b760-4c810d7f5fdd/fdf058fa-5faf-4c83-bffa-4faa42b6d252/dc8ef1f26116405e2b275c5020ad8ce1ac071f86bf2134f143c23e692e396f76.png" />
      </Head>
      <section className="content-wrapper">
        <Header />
        <Content />
        <Usage />
        <Gallery />
        <Crop />
        <BackgroundSection />
        <Sizes />
        <Questions />
        <ScreenInfo footerRef={footerRef} />
        <Footer footerRef={footerRef} />
      </section>
    </>
  );
}
