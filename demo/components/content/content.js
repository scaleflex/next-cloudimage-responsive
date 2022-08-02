import { useEffect, useRef, useState } from 'react';
import { Img } from '../../../src';


function Content() {
  const [mainImageWidth, setMainImageWidth] = useState(0);
  const mainImageWrapper = useRef();

  const getImageWidth = () => {
    setMainImageWidth(mainImageWrapper.current.offsetWidth);
  };

  useEffect(() => {
    setMainImageWidth(mainImageWrapper.current.offsetWidth);

    window.addEventListener('resize', getImageWidth);
    return () => {
      window.removeEventListener('resize', getImageWidth);
    };
  }, []);

  return (
    <div className="content">
      <h1>
        <span>Responsive images</span>
        {' '}
        now easier than ever
      </h1>
      <h2 className="content-text">
        With Cloudimage's responsive plugin, 1 high-quality original image is all it needs. Save storage space and create image variants on-the-fly.
        The responsive image plugin will
        {' '}
        <strong>resize, compress, and accelerate</strong>
        {' '}
        images across the world, on all devices.
        {' '}
        <strong>Lazyload</strong>
        {' '}
        with fancy animation on image load? The plugin takes care of it.
      </h2>
      <div className="github-sandbox-buttons-wrapper">
        <a
          className="github-button transition-filled-button"
          href="https://github.com/scaleflex/js-cloudimage-responsive"
          target="_blank"
          rel="noreferrer"
        >
          View on GitHub
        </a>
        <a
          className="code-sand-box-button"
          href="https://codesandbox.io/s/js-cloudimage-responsive-example-zc1ekf"
          target="_blank"
          rel="noreferrer"
        >
          Edit in CodeSandbox
        </a>
      </div>
      <div className="sea-coast container" ref={mainImageWrapper}>
        <Img
          params="ci_info=2"
          src="Main+image.jpg"
          width={500}
          height={500}
          alt="sea-coast"
        />
        <div className="image-size-wrapper">
          <p className="text">
            <span>
              <span />
              {mainImageWidth}
              px
            </span>
          </p>
        </div>
        <div className="green-blur-circle hide-in-mobile" />
        <div className="blue-blur-circle hide-in-mobile" />
      </div>
      <div className="features-wrapper container">
        <h2>Features</h2>
        <div className="features">
          <div>
            <span className="checkbox-container features-content">
              <strong>Resize large images</strong>
              {' '}
              and
              {' '}
              <strong>generate multiple images</strong>
              {' '}
              for
              different device screen size.
              <span className="checkmark" />
            </span>
          </div>
          <div className="features-content">
            <span className="checkbox-container features-content">
              <span className="features-text">Strip all unnecessary</span>
              metadata and
              <strong>optimize JPEG, PNG and GIF compression.</strong>
              <span className="checkmark" />
            </span>
          </div>
          <div className="features-content">
            <span className="checkbox-container features-content">
              <span className="features-text">
                Efficiently
              </span
            >
              <strong> lazy load images</strong>
              {' '}
              to speed up initial page load
              and save bandwidth.
              <span className="checkmark" />
            </span>
          </div>
          <div className="features-content">
            <span className="checkbox-container features-content">
              <span className="features-text">
                <strong>Show a "blur-up" preview</strong>
                {' '}
                of
                the image
                {' '}
                <strong>while loading.</strong>

              </span>
              <span className="checkmark" />
            </span>
          </div>
          <div className="features-content">
            <span className="checkbox-container features-content">
              <strong>Maintain the image's position</strong>
              {' '}
              so your page doesn't jump while images load.
              <span className="checkmark" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
