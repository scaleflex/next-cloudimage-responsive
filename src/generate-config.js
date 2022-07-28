const defaultValues = {
  token: '',
  customDomain: false,
  lazyLoading: false,
  lazyLoadOffset: 100,
  placeholderBackground: '#f4f4f4',
  baseURL: '',
  apiVersion: 'v7',
  ratio: 1.5,
  imageSizeAttributes: 'use',
  exactSize: false,
  doNotReplaceURL: false,
  limitFactor: 100,
  autoAlt: false,
};

const generateConfig = (config = {}) => ({
  ...defaultValues,
  ...config,
});

export default generateConfig;
