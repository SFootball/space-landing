import { Flex, Box, Container, Text, Image, Divider } from "@chakra-ui/react";
import Card from "./Card";

function Roadmap() {
  return (
    <>
      <Box as="main">
        <Box bgColor="gray.100">
          <Container maxW="1200px">
            <Flex minH="500px" justify="center" align="center">
              <Flex
                direction={{ base: "column", lg: "row" }}
                gap={{ base: "40px", lg: "0" }}
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
                  textAlign="center"
                >
                  SFootball Roadmap
                </Text>
                <Image
                  borderRadius="25px"
                  maxH={{ base: "300px" }}
                  src="/images/common/roadmap.jpg"
                  shadow="2xl"
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
              ></Box>
              <Card
                justify={{ base: "center", lg: "start" }}
                Q="Q1/2024"
                badgeColor="green"
              />
              <Card
                justify={{ base: "center", lg: "end" }}
                Q="Q2/2024"
                badgeColor="yellow"
              />
              <Card
                justify={{ base: "center", lg: "start" }}
                Q="Q3/2024"
                badgeColor="red"
              />
              <Card
                justify={{ base: "center", lg: "end" }}
                Q="Q4/2025"
                badgeColor="red"
              />
            </Flex>
          </Container>
        </Box>
      </Box>
      <Divider />
    </>
  );
}

export default Roadmap;
