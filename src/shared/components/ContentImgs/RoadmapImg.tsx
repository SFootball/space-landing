import { Box, Image } from "@chakra-ui/react";
import { useState } from "react";
import { Blurhash } from "react-blurhash";

const roadmapImgSRC = "/images/common/roadmap.jpg";

const RoadmapImg = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      <Box
        display={imageLoaded ? "none" : "inline"}
        overflow="hidden"
        borderRadius="25px"
        maxH={{ base: "300px" }}
        shadow="2xl"
      >
        <Blurhash
          hash="L35Hn[Y$S5tkO;bvayj?Mxaef6j["
          height="300px"
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      </Box>
      <Image
        borderRadius="25px"
        maxH={{ base: "300px" }}
        shadow="2xl"
        src={roadmapImgSRC}
        objectFit="cover"
        objectPosition="right 0 bottom 0"
        onLoad={() => {
          setImageLoaded(true);
        }}
        display={!imageLoaded ? "none" : "inline"}
      />
    </>
  );
};

export default RoadmapImg;
