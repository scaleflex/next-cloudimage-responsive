import { LAYOUTS } from '../constants';
import { LOADED_IMAGE_STYLES } from '../styles.constants';


const computeImageStyles = (loaded, transitionDuration, objectFit, objectPosition) => ({
  transitionTimingFunction: 'ease',
  willChange: 'opacity, transform',
  transitionDuration,
  transitionDelay: '100ms',
  transitionProperty: 'opacity, transform',
  opacity: 0,
  ...(objectFit ? { objectFit } : {}),
  ...(objectPosition ? { objectPosition } : {}),
  ...(loaded ? LOADED_IMAGE_STYLES : {}),
});

const getWrapperClassname = (layout) => {
  switch (layout) {
    case LAYOUTS.FIXED: {
      return 'ciFixedImage';
    }

    case LAYOUTS.RESPONSIVE: {
      return 'ciResponsiveImage';
    }

    case LAYOUTS.INTRINSIC: {
      return 'ciIntrinsicImage';
    }

    default: {
      return 'ciFillImage';
    }
  }
};

const computeImageSize = (layout, width, height) => {
  const styles = {};

  if (layout !== LAYOUTS.FILL && width && height) {
    styles.width = width;
    styles.height = height;
  }

  return styles;
};

export {
  computeImageStyles,
  getWrapperClassname,
  computeImageSize,
};
