import CloudimageProvider from '../src/provider';
import './main.css';


function MyApp({ Component, pageProps }) {
  const cloudimageConfig = {
    token: 'demo',
    baseURL: 'https://scaleflex.cloudimg.io/v7/demo/cloudimage-responsive-demo/',
    apiVersion: 'v7',
    doNotReplaceURL: true,
    params: { org_if_sml: 1, ci_info: 2 },
    layout: 'fill',
    ssr: false,
  };

  return (
    <CloudimageProvider config={cloudimageConfig}>
      <Component {...pageProps} />
    </CloudimageProvider>
  );
}

export default MyApp;
