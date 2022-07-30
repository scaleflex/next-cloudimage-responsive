import { useRef, useState } from 'react';
import Image from 'next/image';
import { getImgSRC } from 'cloudimage-responsive-utils';

import { computeImageStyles, getWrapperClassname, computeImageSize } from './utils/compute';
import { parseAlt, parseParams, parseImageSrc } from './utils/parse';
import { WRAPPER_STYLES } from './styles.constants';

import classes from './normalize.styles.module.css';


function Img(props) {
  const { config = {} } = props;

  const {
    customDomain, domain, token, apiVersion,
    doNotReplaceURL: imagesDoNotReplaceURL, baseURL, params: imagesParams,
    quality: imagesQuality, layout: imagesLayout, objectFit: imagesObjectFill,
    lowPreviewQuality: imagesLowPreviewQuality, transitionDuration: imagesTransitonDuration,
  } = config;

  const {
    quality = imagesQuality, src, params = imagesParams,
    layout = imagesLayout, objectFit = imagesObjectFill,
    lowPreviewQuality = imagesLowPreviewQuality, onload,
    width, height, doNotReplaceURL = imagesDoNotReplaceURL,
    wrapperClassname, alt, transitionDuration = imagesTransitonDuration,
    style = {},
  } = props;

  const [loaded, setLoaded] = useState(false);

  const wrapperRef = useRef();
  const cName = customDomain ? domain : `${token}.${domain}`;
  const _params = parseParams(params);

  const cloudimageLoader = (context, lowPreview) => {
    const { src: imageSrc, width: imageWidth } = context;

    const [_src] = getImgSRC(imageSrc, baseURL);
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

    if (typeof onload === 'function') {
      onload(event);
    }
  };

  return (
    <div
      ref={wrapperRef}
      style={{ ...WRAPPER_STYLES, ...style }}
      className={`${classes[getWrapperClassname(layout)]}${wrapperClassname ? `${wrapperClassname}` : ''}`}
    >
      <Image
        src={src}
        loader={(context) => cloudimageLoader(context, true)}
        layout={layout}
        priority
        alt={`low-preview-${alt || parseAlt(src)}`}
        {...computeImageSize(layout, width, height)}
      />
      <Image
        src={src}
        layout={layout}
        loader={cloudimageLoader}
        quality={quality}
        objectFit={objectFit}
        style={computeImageStyles(loaded, transitionDuration)}
        onLoad={onImageLoad}
        alt={alt || parseAlt(src)}
        {...computeImageSize(layout, width, height)}
      />
    </div>
  );
}

export default Img;
