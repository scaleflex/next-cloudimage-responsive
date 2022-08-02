import { LAYOUTS } from '../constants';
import { LOADED_IMAGE_STYLES } from '../styles.constants';


const computeImageStyles = (loaded, transitionDuration, objectFit, objectPosition) => ({
  transitionTimingFunction: 'ease',
  willChange: 'opacity, transform',
  transitionDuration,
  transitionDelay: '100ms',
  transitionProperty: 'opacity, transform',
  opacity: 0,
  objectFit,
  objectPosition,
  ...(loaded ? LOADED_IMAGE_STYLES : {}),
});

const getWrapperClassname = (layout) => {
  switch (layout) {
    case LAYOUTS.FIXED: {
      return 'ci-fixed-image';
    }

    case LAYOUTS.RESPONSIVE: {
      return 'ci-responsive-image';
    }

    case LAYOUTS.INTRINSIC: {
      return 'ci-intrinsic-image';
    }

    default: {
      return 'ci-fill-image';
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
