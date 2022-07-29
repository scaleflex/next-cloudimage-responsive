import CloudimageProvider from '../src/provider';


function MyApp({ Component, pageProps }) {
  const cloudimageConfig = {
    token: 'demo',
    baseURL: 'https://scaleflex.cloudimg.io/v7/demo/cloudimage-responsive-demo/',
    limitFactor: 10,
    apiVersion: 'v7',
    doNotReplaceURL: true,
    lowQualityPreview: {
      minImgWidth: 150,
    },
    params: {
      org_if_sml: 1,
      grey: 1,
    },
    layout: 'fill',
  };

  return (
    <CloudimageProvider config={cloudimageConfig}>
      <Component {...pageProps} />
    </CloudimageProvider>
  );
}

export default MyApp;
