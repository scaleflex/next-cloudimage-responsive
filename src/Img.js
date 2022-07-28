import Image from 'next/image';


function Img() {
  const cloudimageLoader = (e) => {
    console.log(e);
  };

  return (
    <Image
      loader={cloudimageLoader}
      src="Main+image.jpg"
      layout="fill"
    />
  );
}

export default Img;
