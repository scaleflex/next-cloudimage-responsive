import { createContext, useMemo } from 'react';
import { generateConfig } from './generate-config';


const CloudimageContext = createContext({ cloudImageConfig: {} });

function CloudimageProvider({ config = {}, children } = {}) {
  const cloudImageConfig = useMemo(() => generateConfig(config), [config]);

  return (
    <CloudimageContext.Provider value={cloudImageConfig}>
      {children}
    </CloudimageContext.Provider>
  );
}

export { CloudimageContext };
export default CloudimageProvider;
