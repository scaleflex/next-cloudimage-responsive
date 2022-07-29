import { LAYOUTS } from './constants';


const wrapperStyles = {
  position: 'relative',
  height: '100%',
};

const loadedImageStyles = {
  opacity: 1,
};

const computeImageStyles = (loaded, transitionDuration) => ({
  transitionTimingFunction: 'ease',
  willChange: 'opacity, transform',
  transitionDuration,
  transitionDelay: '100ms',
  transitionProperty: 'opacity, transform',
  opacity: 0,
  ...(loaded ? loadedImageStyles : {}),
});

const getWrapperClassname = (layout) => {
  switch (layout) {
    case LAYOUTS.FIXED: {
      return 'ci-fixed-image';
    }

    case LAYOUTS.RESPONSIVE: {
      return 'ci-responsive-image';
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
  wrapperStyles,
  computeImageStyles,
  getWrapperClassname,
  computeImageSize,
};
