import { useContext } from 'react';

import { CloudimageContext } from './provider';
import Image from './Img';


function Img(props) {
  const config = useContext(CloudimageContext);

  return (
    <Image {...props} config={config} />
  );
}

function BackgroundImg(props) {
  const config = useContext(CloudimageContext);

  return (
    <Image background {...props} config={config} />
  );
}


export default Img;
export { CloudimageContext as CloudimageProvider, Img, BackgroundImg };
