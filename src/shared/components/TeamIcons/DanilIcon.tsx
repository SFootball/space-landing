import { Box, Image } from "@chakra-ui/react";
import { useState } from "react";
import { Blurhash } from "react-blurhash";

const danilIconSRC = "/images/avatars/danil.jpg";

const DanilIcon = () => {
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
          hash="URS6SsWB~qxua}j[t7ay-;j[IUWBxuayNGj["
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
        src={danilIconSRC}
        objectFit="cover"
        boxShadow="dark-lg"
        objectPosition="right 0 bottom 0"
        onLoad={() => {
          setImageLoaded(true);
        }}
        display={!imageLoaded ? "none" : "inline"}
        mb="10px"
      />
    </>
  );
};

export default DanilIcon;
