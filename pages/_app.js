import CloudimageProvider from '../src/provider';
import './main.css';


function MyApp({ Component, pageProps }) {
  const cloudimageConfig = {
    token: 'scaleflex',
    baseURL: 'demo/cloudimage-responsive-demo/',
    apiVersion: 'v7',
    doNotReplaceURL: false,
    params: { org_if_sml: 1, ci_info: 2 },
  };

  return (
    <CloudimageProvider config={cloudimageConfig}>
      <Component {...pageProps} />
    </CloudimageProvider>
  );
}

export default MyApp;
