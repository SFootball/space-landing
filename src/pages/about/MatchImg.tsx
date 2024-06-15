import { Box, Image } from "@chakra-ui/react";
import { useState } from "react";
import { Blurhash } from "react-blurhash";

const matchImgSRC = "/images/common/match.jpg";

const MatchImg = () => {
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
          hash="L5D03|wRA0bV00_2~WD+GgD*a0%N"
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
        src={matchImgSRC}
        objectFit="cover"
        boxShadow="dark-lg"
        objectPosition="left -60px bottom 0"
        onLoad={() => {
          setImageLoaded(true);
        }}
        display={!imageLoaded ? "none" : "inline"}
      />
    </>
  );
};

export default MatchImg;
