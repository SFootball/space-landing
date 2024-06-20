import { Box, Image } from "@chakra-ui/react";
import { useState } from "react";
import { Blurhash } from "react-blurhash";
import { imgPathMap } from "src/shared/constants/imgPathMap";

export const Background = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const { background } = imgPathMap;

  return (
    <>
      <Box display={imageLoaded ? "none" : "inline"}>
        <Blurhash
          hash={background.hash}
          width="100vw"
          height="100vh"
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      </Box>
      <Image
        h="calc(100vh + 110px)"
        w="100vw"
        src={background.path}
        position="fixed"
        top="-110px"
        zIndex="-1"
        objectFit="cover"
        onLoad={() => {
          setImageLoaded(true);
        }}
        display={!imageLoaded ? "none" : "inline"}
      />
    </>
  );
};
