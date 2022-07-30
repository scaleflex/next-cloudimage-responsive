const DEFAULT_VALUES = {
  token: '',
  domain: 'cloudimg.io',
  customDomain: false,
  lazyLoading: true,
  lazyLoadOffset: 100,
  placeholderBackground: '#f4f4f4',
  baseURL: '',
  apiVersion: 'v7',
  params: 'org_if_sml=1',
  doNotReplaceURL: false,
  limitFactor: 100,
  autoAlt: false,
  quality: 75,
  layout: 'responsive',
  ObjectFit: 'fill',
  lowPreviewQuality: 50,
  transitionDuration: '800ms',
};

const LAYOUTS = {
  FILL: 'fill',
  RESPONSIVE: 'responsive',
  INTRINSIC: 'intrinsic',
  FIXED: 'fixed',
};

export { LAYOUTS, DEFAULT_VALUES };
