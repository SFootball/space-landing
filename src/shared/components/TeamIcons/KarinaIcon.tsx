import { Box, Image } from "@chakra-ui/react";
import { useState } from "react";
import { Blurhash } from "react-blurhash";

const karinaIconSRC = "/images/avatars/karina_kanchurina.jpg";

const KarinaIcon = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      <Box
        display={imageLoaded ? "none" : "inline"}
        borderRadius="50%"
        overflow="hidden"
        width="120px"
        height="120px"
      >
        <Blurhash
          hash="LJLq5{.8_N%2Dit7.8Rj%#WBMdX8"
          width="120px"
          height="120px"
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      </Box>
      <Image
        h="120px"
        w="120px"
        borderRadius="50%"
        src={karinaIconSRC}
        objectFit="cover"
        boxShadow="dark-lg"
        objectPosition="right -44px bottom 0"
        onLoad={() => {
          setImageLoaded(true);
        }}
        display={!imageLoaded ? "none" : "inline"}
      />
    </>
  );
};

export default KarinaIcon;
