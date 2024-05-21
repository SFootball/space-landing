import {
  Flex,
  Box,
  Container,
  Heading,
  // HStack,
} from "@chakra-ui/react";
// import { Link } from "react-router-dom";

function About() {
  return (
    <Box as="main">
      <Box bgColor="gray.100">
        <Container maxW="1200px">
          <Flex
            minH="100vh"
            justifyContent="center"
            alignItems="center"
            direction="column"
          >
            {/* <Heading
            fontSize={{ base: "56px", sm: "56px", xl: "72px" }}
            marginBottom="54px"
            fontWeight="bold"
            color="white"
            textAlign="center"
          >
            About
          </Heading> */}
          </Flex>
        </Container>
      </Box>

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
  );
}

export default About;
