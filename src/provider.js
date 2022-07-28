import { createContext, useMemo } from 'react';


const CloudimageContext = createContext({ cloudImageConfig: {} });

function CloudimageProvider({ config = {}, children } = {}) {
  const {
    token = '',
    domain = config.customDomain || 'cloudimg.io',
    customDomain = false,
    lazyLoading = false,
    lazyLoadOffset = 100,
    placeholderBackground = '#f4f4f4',
    baseUrl, // to support old name
    baseURL,
    apiVersion = 'v7',
    presets,
    ratio = 1.5,
    imageSizeAttributes = 'use',
    exactSize = false,
    doNotReplaceURL = false,
    limitFactor = 100,
    autoAlt = false,
  } = config;

  const cloudImageConfig = useMemo(() => ({
    token,
    domain,
    customDomain,
    lazyLoading,
    lazyLoadOffset,
    placeholderBackground,
    baseURL: baseUrl || baseURL,
    ratio,
    exactSize,
    presets: presets || {
      xs: '(max-width: 575px)', // to 575       PHONE
      sm: '(min-width: 576px)', // 576 - 767    PHABLET
      md: '(min-width: 768px)', // 768 - 991    TABLET
      lg: '(min-width: 992px)', // 992 - 1199   SMALL_LAPTOP_SCREEN
      xl: '(min-width: 1200px)', // from 1200    USUALSCREEN
    },
    apiVersion,
    previewQualityFactor: 10,
    doNotReplaceURL,
    limitFactor,
    imageSizeAttributes,
    autoAlt,
  }), [config]);

  return (
    <CloudimageContext.Provider value={cloudImageConfig}>
      {children}
    </CloudimageContext.Provider>
  );
}

export { CloudimageContext };
export default CloudimageProvider;
