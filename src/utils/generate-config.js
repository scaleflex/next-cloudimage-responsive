import { DEFAULT_VALUES } from '../constants';


const generateConfig = (config = {}) => ({
  domain: config.customDomain,
  ...DEFAULT_VALUES,
  ...config,
});

export { generateConfig };
