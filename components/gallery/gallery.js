import { Img } from '../../src';


function Gallery() {
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
          <div className="first-column-image">
            <Img
              src="House+img.jpg"
              id="left-column-image"
            />
            <div className="image-size-wrapper">
              <div className="text">
                <span>
                  <span id="left-column-image-size" />
                  {' '}
                  px
                </span>
              </div>
            </div>
          </div>
          <div className="right-column">
            <div className="square-with-circle-img">
              <div className="second-column-image hide-in-mobile">
                <Img
                  src="Church+square+img.jpg"
                  id="right-column-first-image"
                />
                <div className="image-size-wrapper">
                  <p className="text">
                    <span>
                      <span id="right-column-first-image-size" />
                      {' '}
                      px
                    </span>
                  </p>
                </div>
              </div>
              <div className="circle-image-wrapper">
                <Img
                  className="ellipse-image"
                  src="Girl+img.jpg"
                  params="w=265&h=265&gravity=north"
                  id="right-column-second-image"
                />
                <div className="circle-image-text-wrapper">
                  <div className="image-size-wrapper">
                    <p className="text">
                      <span>
                        <span id="right-column-second-image-size" />
                        {' '}
                        px
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="horizontal-image">
              <Img
                id="first-horizontal-image"
                src="Dresses+img.jpg"
              />
              <div className="image-size-wrapper">
                <p className="text">
                  <span>
                    <span id="first-horizontal-image-size" />
                    {' '}
                    px
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-screen-horizontal-image">
          <Img
            src="Dresses+img.jpg"
            id="second-horizontal-image"
          />
          <div className="image-size-wrapper">
            <p className="text">
              <span>
                <span id="second-horizontal-image-size" />
                {' '}
                px
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


export default Gallery;
