import { Box, Image } from "@chakra-ui/react";
import { useState } from "react";
import { Blurhash } from "react-blurhash";

const aliIconSRC = "/images/avatars/ali_baybutov.jpg";

const AliIcon = () => {
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
          hash="LiM%}}%M?bIU~qWBRjayRjxuj[t7"
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
        src={aliIconSRC}
        objectFit="cover"
        boxShadow="dark-lg"
        objectPosition="right -18px bottom 0"
        onLoad={() => {
          setImageLoaded(true);
        }}
        display={!imageLoaded ? "none" : "inline"}
      />
    </>
  );
};

export default AliIcon;
