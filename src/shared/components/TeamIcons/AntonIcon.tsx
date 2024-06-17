import { Box, Image } from "@chakra-ui/react";
import { useState } from "react";
import { Blurhash } from "react-blurhash";

const antonIconSRC = "/images/avatars/tuktarev_anton.jpg";

const AntonIcon = () => {
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
          hash="T48M?Wxa01D%s:oz5SNH}?Fdj[#S"
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
        src={antonIconSRC}
        objectFit="cover"
        boxShadow="dark-lg"
        objectPosition="right -48px bottom 0"
        onLoad={() => {
          setImageLoaded(true);
        }}
        display={!imageLoaded ? "none" : "inline"}
        mb="10px"
      />
    </>
  );
};

export default AntonIcon;
