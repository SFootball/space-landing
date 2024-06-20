import { Box, Image } from "@chakra-ui/react";
import { useState } from "react";
import { Blurhash } from "react-blurhash";

type PreloadImageProps = {
  imgSRC: string | undefined;
  width?: string;
  height?: string;
  hash: string | undefined;
  borderRadius: string | undefined;
  objectPosition: string | undefined;
  mb?: string;
  maxH?: string;
  maxW?: string;
};

export const PreloadImage: React.FC<PreloadImageProps> = ({
  imgSRC,
  width,
  height,
  hash,
  borderRadius,
  objectPosition,
  mb,
  maxH,
  maxW,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      <Box
        display={imageLoaded ? "none" : "inline"}
        borderRadius={borderRadius}
        overflow="hidden"
        width={width}
        height={height}
      >
        <Blurhash
          hash={hash}
          width={width}
          height={height}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      </Box>
      <Image
        h={height}
        w={width}
        maxH={maxH}
        maxW={maxW}
        borderRadius={borderRadius}
        src={imgSRC}
        objectFit="cover"
        boxShadow="dark-lg"
        objectPosition={objectPosition}
        onLoad={() => {
          setImageLoaded(true);
        }}
        display={!imageLoaded ? "none" : "inline"}
        mb={mb}
      />
    </>
  );
};
