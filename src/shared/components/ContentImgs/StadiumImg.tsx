import { Box, Image } from "@chakra-ui/react";
import { useState } from "react";
import { Blurhash } from "react-blurhash";

const stadiumImgSRC = "/images/common/stadium.jpg";

const StadiumImg = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      <Box
        display={imageLoaded ? "none" : "inline"}
        borderRadius="50%"
        overflow="hidden"
        width="300px"
        height="300px"
      >
        <Blurhash
          hash="TB9j+TWCD*~qaxM{00fRxs00og%M"
          width="300px"
          height="300px"
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      </Box>
      <Image
        h="300px"
        w="300px"
        borderRadius="50%"
        src={stadiumImgSRC}
        boxShadow="dark-lg"
        objectFit="cover"
        onLoad={() => {
          setImageLoaded(true);
        }}
        display={!imageLoaded ? "none" : "inline"}
      />
    </>
  );
};

export default StadiumImg;
