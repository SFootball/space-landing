import { Flex, Box, Container, Text } from "@chakra-ui/react";

function About() {
  return (
    <Box as="main">
      <Box bgColor="gray.100">
        <Container maxW="1200px">
          <Flex maxH="830px" py="90px" direction="column" gap="50px">
            <Flex justifyContent="center" alignItems="center" gap="50px">
              <Box
                h="300px"
                w="300px"
                borderRadius="50%"
                bg={"url('/images/stadium.jpg') no-repeat 0 -70px"}
                bgSize="cover"
                boxShadow="dark-lg"
                p="6"
              ></Box>
              <Box maxW="600px">
                <Text fontSize={{ base: "32px", lg: "46px" }} as="b">
                  Who are we?
                </Text>
                <Text fontSize={{ base: "14px", lg: "20px" }}>
                  SFootball develops STARK-based solutions for the blockchain
                  industry. Our products facilitate secure, trustless, and
                  scalable blockchain applications.
                </Text>
              </Box>
            </Flex>
            <Flex justifyContent="center" alignItems="center" gap="50px">
              <Box maxW="600px">
                <Text fontSize={{ base: "32px", lg: "46px" }} as="b">
                  Our Products
                </Text>
                <Text fontSize={{ base: "14px", lg: "20px" }}>
                  SFootball develops StarkEx, a standalone permissioned
                  Validity-Rollup, and Starknet, a permissionless decentralized
                  ZK-Rollup.
                </Text>
              </Box>
              <Box
                h="300px"
                w="300px"
                borderRadius="50%"
                bg={"url('/images/ball.jpg') no-repeat -190px 0"}
                bgSize="auto 300px"
                boxShadow="dark-lg"
                p="6"
              ></Box>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}

export default About;
