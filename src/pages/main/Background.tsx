import { Box, Image } from "@chakra-ui/react";
import { useState } from "react";
import { Blurhash } from "react-blurhash";

export const bgImgURL = "/images/common/footballer.jpg";

const Background = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      <Box display={imageLoaded ? "none" : "inline"}>
        <Blurhash
          hash="LEED*.nn~p8^028wRhR-4T?Y4o-;"
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
        src={bgImgSRC}
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

export default Background;
