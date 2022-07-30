import Header from '../components/header';
import Content from '../components/content';
import Usage from '../components/usage';
import Gallery from '../components/gallery';
import Crop from '../components/crop';
import Sizes from '../components/sizes';


export default function Home() {
  return (
    <section className="content-wrapper">
      <Header />
      <Content />
      <Usage />
      <Gallery />
      <Crop />
      <Sizes />
    </section>
  );
}
