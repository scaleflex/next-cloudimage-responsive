import { useContext } from 'react';
import { CloudimageContext } from './provider';
import Image from './Img';


function Img(props) {
  const config = useContext(CloudimageContext);

  return (
    <Image {...props} config={config} />
  );
}


export { Img };
