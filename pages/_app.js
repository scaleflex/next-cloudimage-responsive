import CloudimageProvider from '../src/provider';


function MyApp({ Component, pageProps }) {
  const cloudimageConfig = {
    token: 'demo',
    baseURL: 'https://cloudimage.public.airstore.io/demo/',
    params: 'ci_info=1&org_if_sml=1',
    placeholderBackground: '#e1e1e1',
    limitFactor: 10,
    apiVersion: 'v7',
    lowQualityPreview: {
      minImgWidth: 150,
    },
  };

  return (
    <CloudimageProvider config={cloudimageConfig}>
      <Component {...pageProps} />
    </CloudimageProvider>
  );
}

export default MyApp;
