import { Box, Image } from "@chakra-ui/react";
import { useState } from "react";
import { Blurhash } from "react-blurhash";

const denisIconSRC = "/images/avatars/denis_yunusov.jpg";

const DenisIcon = () => {
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
          hash="T9N0@;M{ui4Tog?wY6Rjq[S#j[w^"
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
        src={denisIconSRC}
        objectFit="cover"
        boxShadow="dark-lg"
        objectPosition="right -48px bottom 0"
        onLoad={() => {
          setImageLoaded(true);
        }}
        display={!imageLoaded ? "none" : "inline"}
      />
    </>
  );
};

export default DenisIcon;
