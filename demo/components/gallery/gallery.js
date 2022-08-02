import { useEffect, useRef, useState } from 'react';
import { Img } from '../../../src';


function Gallery() {
  const [imagesWidth, setImagesWidth] = useState({
    house: 0,
    church: 0,
    girl: 0,
    clothes: 0,
  });

  const houseRef = useRef();
  const churchRef = useRef();
  const girlRef = useRef();
  const clothesRef = useRef();

  const updateSizes = () => {
    if (houseRef.current) {
      setImagesWidth({
        ...imagesWidth,
        house: houseRef.current.offsetWidth,
        church: churchRef.current.offsetWidth,
        girl: girlRef.current.offsetWidth,
        clothes: clothesRef.current.offsetWidth,
      });
    }
  };

  useEffect(() => {
    updateSizes();
    window.addEventListener('resize', updateSizes);

    return () => {
      window.removeEventListener('resize', updateSizes);
    };
  }, []);

  return (
    <section className="demo-gallery">
      <div className="container-fluid">
        <div className="demo-gallery-title">
          <h2>Responsive images, in real-time!</h2>
          <p className="demo-gallery-text">
            Change the size of your browser's window to
            test out how the Cloudimage Responsive plugin delivers
            an optimized image for your screen size
          </p>
        </div>
        <div className="image-wrapper">
          <div ref={houseRef} className="first-column-image">
            <Img
              src="House+img.jpg"
            />
            <div className="image-size-wrapper">
              <div className="text">
                <span>
                  <span />
                  {imagesWidth.house}
                  {' '}
                  px
                </span>
              </div>
            </div>
          </div>
          <div className="right-column">
            <div className="square-with-circle-img">
              <div ref={churchRef} className="second-column-image hide-in-mobile">
                <Img src="Church+square+img.jpg" />
                <div className="image-size-wrapper">
                  <p className="text">
                    <span>
                      <span />
                      {imagesWidth.church}
                      {' '}
                      px
                    </span>
                  </p>
                </div>
              </div>
              <div ref={girlRef} className="circle-image-wrapper">
                <Img src="Girl+img.jpg" params="w=265&h=265&gravity=north" />
                <div className="circle-image-text-wrapper">
                  <div className="image-size-wrapper">
                    <p className="text">
                      <span>
                        <span />
                        {imagesWidth.girl}
                        {' '}
                        px
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div ref={clothesRef} className="horizontal-image">
              <Img src="Dresses+img.jpg" />
              <div className="image-size-wrapper">
                <p className="text">
                  <span>
                    <span />
                    {imagesWidth.clothes}
                    {' '}
                    px
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}


export default Gallery;
