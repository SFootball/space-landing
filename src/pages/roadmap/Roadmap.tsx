import { Flex, Box, Container, Heading } from "@chakra-ui/react";
import { bgImgURL } from "../main/Main";

function Roadmap() {
  return (
    <Box
      bgImage={bgImgURL}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center"
      bgAttachment="fixed"
    >
      <Box as="main">
        <Container maxW="1200px">
          <Flex
            h="calc(100vh - 110px)"
            justifyContent="center"
            alignItems="center"
            direction="column"
          >
            <Heading
              fontSize={{ base: "56px", sm: "56px", xl: "72px" }}
              marginBottom="54px"
              fontWeight="bold"
              color="white"
              textAlign="center"
            >
              Roadmap
            </Heading>
          </Flex>
        </Container>
        <Box bgColor="white">
          <Container maxW="1200px">
            <Flex maxH="720px" py="90px" justify="center" align="center"></Flex>
          </Container>
          <Container
            maxW="760px"
            maxH="1280px"
            py={{ base: "75px", sm: "75px", xl: "150px" }}
          ></Container>
        </Box>
        <Box bgColor="gray.100">
          <Container
            maxW="1200px"
            maxH="3300px"
            pt={{ base: "135px", xl: "135px" }}
            pb={{ base: "165px", xl: "165px" }}
          ></Container>
        </Box>
      </Box>
    </Box>
  );
}

export default Roadmap;
