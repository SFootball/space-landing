import { Box, Image } from "@chakra-ui/react";
import { useState } from "react";
import { Blurhash } from "react-blurhash";

const scautImgSRC = "/images/common/scaut.jpg";

const ScautImg = () => {
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
          hash="LPALkuoJD,WCu6kCICWBtSfljDf5"
          width="300px"
          height="300px"
          border-radius={"50%"}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      </Box>
      <Image
        h="300px"
        w="300px"
        borderRadius="50%"
        src={scautImgSRC}
        objectFit="cover"
        boxShadow="dark-lg"
        objectPosition="left -16px bottom 0"
        onLoad={() => {
          setImageLoaded(true);
        }}
        display={!imageLoaded ? "none" : "inline"}
      />
    </>
  );
};

export default ScautImg;
