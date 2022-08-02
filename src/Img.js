import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { getImgSRC, processReactNode } from 'cloudimage-responsive-utils';

import { computeImageStyles, getWrapperClassname, computeImageSize } from './utils/compute';
import { parseAlt, parseParams, parseImageSrc } from './utils/parse';
import { WRAPPER_STYLES } from './styles.constants';

import classes from './normalize.styles.module.css';


function Img(props) {
  const { config = {} } = props;

  const {
    customDomain, domain, token, apiVersion,
    doNotReplaceURL: imagesDoNotReplaceURL, baseURL, params: imagesParams,
    quality: imagesQuality, layout: imagesLayout, objectFit: imagesObjectFit,
    lowPreviewQuality: imagesLowPreviewQuality, transitionDuration: imagesTransitonDuration,
    ssr: imagesSsr, objectPosition: imagesObjectPosition,
  } = config;

  const {
    quality = imagesQuality, src, params = imagesParams,
    layout = imagesLayout, objectFit = imagesObjectFit,
    lowPreviewQuality = imagesLowPreviewQuality, onImgLoad,
    width, height, doNotReplaceURL = imagesDoNotReplaceURL,
    className, alt, transitionDuration = imagesTransitonDuration,
    style = {}, ssr = imagesSsr, children, background, objectPosition = imagesObjectPosition,
  } = props;

  const [loaded, setLoaded] = useState(false);
  const [cloudImgSrc, setCloudImgSrc] = useState('');
  const [cloudImgSrcSet, setCloudImgSrcSet] = useState('');

  const wrapperRef = useRef();

  let previousWidth;
  const cName = customDomain ? domain : `${token}.${domain}`;
  const _params = parseParams(params);
  const [_src] = getImgSRC(src, baseURL);

  const cloudimageLoader = (context, lowPreview) => {
    const { width: imageWidth } = context;
    const lowPreviewWidth = imageWidth / (100 / lowPreviewQuality);

    return parseImageSrc({
      cName,
      doNotReplaceURL,
      apiVersion,
      src: _src,
      width: lowPreview ? lowPreviewWidth : imageWidth,
      params: _params,
      lowPreview,
    });
  };

  const onImageLoad = (event) => {
    setLoaded(true);

    if (typeof onImgLoad === 'function') {
      onImgLoad(event);
    }
  };

  const processImage = (update, windowScreenBecomesBigger) => {
    const _props = {
      src,
      width,
      params,
      doNotReplaceURL,
      config,
    };

    const { cloudimgSRCSET, cloudimgURL } = processReactNode(
      _props,
      wrapperRef.current,
      update,
      windowScreenBecomesBigger,
      false,
    ) || {};

    if (cloudimgSRCSET && cloudimgURL) {
      const _srcSet = cloudimgSRCSET
        .map(({ dpr, url }) => `${url} ${dpr}x`).join(', ');

      setCloudImgSrc(cloudimgURL);
      setCloudImgSrcSet(_srcSet);
    }
  };

  const handleWindowResize = () => {
    const windowInnerWidth = window.innerWidth;

    if (previousWidth && previousWidth !== windowInnerWidth) {
      processImage(
        true,
        windowInnerWidth > previousWidth,
      );
      previousWidth = windowInnerWidth;
    }
  };

  const wrapperClassname = background
    ? classes.ciBackgroundWrapper : classes[getWrapperClassname(layout)];

  useEffect(() => {
    if (ssr) return;

    previousWidth = window.innerWidth;

    processImage();
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      style={{ ...WRAPPER_STYLES, ...style }}
      className={`${wrapperClassname}${className ? ` ${className}` : ''}`}
    >
      <Image
        src={src}
        loader={(context) => cloudimageLoader(context, true)}
        layout="fill"
        priority
        objectFit={objectFit}
        objectPosition={objectPosition}
        alt={`low-preview-${alt || parseAlt(src)}`}
        {...computeImageSize(layout, width, height)}
      />
      {ssr ? (
        <Image
          src={src}
          layout={layout}
          loader={cloudimageLoader}
          quality={quality}
          objectFit={objectFit}
          objectPosition={objectPosition}
          style={computeImageStyles(loaded, transitionDuration)}
          onLoad={onImageLoad}
          alt={alt || parseAlt(src)}
          {...computeImageSize(layout, width, height)}
        />
      ) : (
        <img
          src={cloudImgSrc}
          srcSet={cloudImgSrcSet}
          alt={alt || parseAlt(src)}
          onLoad={onImageLoad}
          style={computeImageStyles(loaded, transitionDuration, objectFit, objectPosition)}
          className={classes.ciSsgImage}
          loading="lazy"
        />
      )}

      {background && (
      <div className={classes.ciBackgroundContent}>
        {children}
      </div>
      )}
    </div>
  );
}

export default Img;
