const DEFAULT_VALUES = {
  token: '',
  domain: 'cloudimg.io',
  customDomain: false,
  lazyLoading: true,
  lazyLoadOffset: 100,
  baseURL: '',
  apiVersion: 'v7',
  params: 'org_if_sml=1',
  doNotReplaceURL: false,
  limitFactor: 100,
  quality: 75,
  layout: 'fill',
  objectFit: 'cover',
  lowPreviewQuality: 50,
  transitionDuration: '800ms',
  objectPosition: 'center',
  devicePixelRatioList: [1, 1.5, 2],
  ssr: false,
};

const LAYOUTS = {
  FILL: 'fill',
  RESPONSIVE: 'responsive',
  INTRINSIC: 'intrinsic',
  FIXED: 'fixed',
};

const WIDTH_PARAMS = ['w', 'width'];

const INFO_REGEX = /&ci_info=\d|\?ci_info=\d|ci_info=\d/;

export {
  LAYOUTS, DEFAULT_VALUES, WIDTH_PARAMS, INFO_REGEX,
};
