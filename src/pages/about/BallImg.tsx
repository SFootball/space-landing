import { Box, Image } from "@chakra-ui/react";
import { useState } from "react";
import { Blurhash } from "react-blurhash";

const ballImgSRC = "/images/common/ball.jpg";

const BallImg = () => {
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
          hash="L?Fa5|YRv|xXyC$_slsqesn~xYR."
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
        src={ballImgSRC}
        objectFit="cover"
        boxShadow="dark-lg"
        objectPosition="right 0 bottom 0"
        onLoad={() => {
          setImageLoaded(true);
        }}
        display={!imageLoaded ? "none" : "inline"}
      />
    </>
  );
};

export default BallImg;
