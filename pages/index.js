import { useRef } from 'react';
import Head from 'next/head';
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
        <title>Next Cloudimage Responsive</title>
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
