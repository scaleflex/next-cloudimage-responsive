import Image from 'next/image';
import { getImgSRC } from 'cloudimage-responsive-utils';
import { useState } from 'react';
import { parseParams } from './parse-params';
import { parseImageSrc } from './parse-url';
import classes from './normalize.styles.module.css';
import {
  wrapperStyles, computeImageStyles, getWrapperClassname, computeImageSize,
} from './compute-styles';
import { parseAlt } from './parse-alt';


function Img(props) {
  const { config = {} } = props;

  const {
    customDomain, domain, token, apiVersion,
    doNotReplaceURL: imagesDoNotReplaceURL, baseURL, params,
    quality: imagesQuality, layout: imagesLayout, objectFit: imagesObjectFill,
    lowPreviewQuality: imagesLowPreviewQuality, transitionDuration: imagesTransitonDuration,
  } = config;

  const {
    quality = imagesQuality, src,
    layout = imagesLayout, objectFit = imagesObjectFill,
    lowPreviewQuality = imagesLowPreviewQuality, onload,
    width, height, doNotReplaceURL = imagesDoNotReplaceURL,
    wrapperClassname, alt, transitionDuration = imagesTransitonDuration,
  } = props;

  const [loaded, setLoaded] = useState(false);

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
      style={wrapperStyles}
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
