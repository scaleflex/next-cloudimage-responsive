

const defaultValues = {
  token: '',
  domain: 'cloudimg.io',
  customDomain: false,
  lazyLoading: false,
  lazyLoadOffset: 100,
  placeholderBackground: '#f4f4f4',
  baseURL: '',
  apiVersion: 'v7',
  ratio: 1.5,
  params: 'org_if_sml=1',
  imageSizeAttributes: 'use',
  exactSize: false,
  doNotReplaceURL: false,
  limitFactor: 100,
  autoAlt: false,
  quality: 75,
  layout: 'responsive',
  ObjectFit: 'fill',
  lowPreviewQuality: 50,
  transitionDuration: '800ms',
};

const generateConfig = (config = {}) => ({
  domain: config.customDomain,
  ...defaultValues,
  ...config,
});

export { generateConfig };
