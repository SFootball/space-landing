import { Flex, Box, Container, Text, Divider } from "@chakra-ui/react";
import { Card } from "./Card";
import { roadmapItems } from "./roadmap.config";
import { PreloadImage } from "src/shared/components/PreloadImage";

export const Roadmap = () => {
  return (
    <>
      <Box as="main">
        <Box bgColor="gray.100">
          <Container maxW="1200px" py="40px">
            <Flex justify="center" align="center">
              <Flex
                direction={{ base: "column", lg: "row" }}
                gap={{ base: "40px" }}
                w="100%"
                bgColor="white"
                justify="space-between"
                align="center"
                p="40px 40px"
                borderRadius="50px"
                shadow="2xl"
              >
                <Text
                  fontSize={{ base: "32px", lg: "46px" }}
                  as="b"
                  textAlign={{ base: "center", lg: "left" }}
                >
                  SFootball Roadmap
                  <Text
                    textAlign="left"
                    fontSize={{ base: "18px", lg: "26px" }}
                    fontWeight="normal"
                    maxW="600px"
                  >
                    We invite you to familiarize yourself with the tasks that we
                    have completed, are developing and plan to implement
                  </Text>
                </Text>
                <PreloadImage
                  imgSRC="/images/common/roadmap.jpg"
                  maxH="300px"
                  hash="L35Hn[Y$S5tkO;bvayj?Mxaef6j["
                  borderRadius="25px"
                  objectPosition="right 0 bottom 0"
                />
              </Flex>
            </Flex>
          </Container>
        </Box>
        <Box bgColor="white" py={{ base: "75px", sm: "75px", xl: "150px" }}>
          <Container maxW="1200px">
            <Flex
              direction="column"
              justify="start"
              position="relative"
              gap={{ base: "80px", lg: "0" }}
              py={{ base: "80px", lg: "0" }}
            >
              <Box
                position="absolute"
                top="0"
                left="50%"
                width="2px"
                bgColor="red"
                h="100%"
              />
              {roadmapItems.map((item, index) => {
                const isHonest = index % 2 === 0;
                return (
                  <Card
                    key={index}
                    containerProps={{
                      justifyContent: {
                        base: "center",
                        lg: isHonest ? "start" : "end",
                      },
                    }}
                    date={item.date}
                    badgeColor={item.badgeColor}
                    title={item.title}
                    description={item.description}
                  />
                );
              })}
            </Flex>
          </Container>
        </Box>
      </Box>
      <Divider />
    </>
  );
};
