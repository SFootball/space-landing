import { Flex, Box, Container, Text, Divider } from "@chakra-ui/react";

function About() {
  return (
    <Box as="main">
      <Box bgColor="gray.100">
        <Container maxW="1200px">
          <Flex maxH="1200px" py="140px" direction="column" gap="50px">
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
      <Box bgColor="white">
        <Container maxW="1000px">
          <Box maxH="1600px" pt="140px">
            <Box mb="140px">
              <Text fontSize={{ base: "21px", lg: "30px" }} as="b">
                Management
              </Text>
              <Divider borderColor="black" mb="90px" />
              <Flex justify="center" align="start" gap="60px">
                <Flex direction="column" align="center">
                  <Box
                    h="120px"
                    w="120px"
                    borderRadius="50%"
                    bg="gray.100"
                    bgSize="auto 120px"
                    boxShadow="dark-lg"
                    p="6"
                    mb="16px"
                  ></Box>
                  <Text as="b">Denis</Text>
                  <Text>Co-Founder, CEO</Text>
                </Flex>
                <Flex direction="column" align="center">
                  <Box
                    h="120px"
                    w="120px"
                    borderRadius="50%"
                    bg={"url('/avatars/ildar_nasyrov.jpeg') no-repeat"}
                    bgSize="auto 120px"
                    boxShadow="dark-lg"
                    p="6"
                    mb="16px"
                  ></Box>
                  <Text as="b">Ildar Nasyrov</Text>
                  <Text>Co-Founder, CTO</Text>
                </Flex>
              </Flex>
            </Box>
            <Box mb="140px">
              <Text fontSize={{ base: "21px", lg: "30px" }} as="b">
                Core team
              </Text>
              <Divider borderColor="black" mb="80px" />
              <Flex justify="start" align="start" wrap="wrap" rowGap="60px">
                <Flex direction="column" align="center" width="25%">
                  <Box
                    h="120px"
                    w="120px"
                    borderRadius="50%"
                    bg={"url('/avatars/tuktarev_anton.jpg') no-repeat"}
                    bgSize="auto 120px"
                    boxShadow="dark-lg"
                    p="6"
                    mb="16px"
                  ></Box>
                  <Text as="b">Anton Tuktarev</Text>
                  <Text>Role</Text>
                </Flex>
                <Flex direction="column" align="center" width="25%">
                  <Box
                    h="120px"
                    w="120px"
                    borderRadius="50%"
                    bg="gray.100"
                    bgSize="auto 120px"
                    boxShadow="dark-lg"
                    p="6"
                    mb="16px"
                  ></Box>
                  <Text as="b">Leisan</Text>
                  <Text>Role</Text>
                </Flex>
                <Flex direction="column" align="center" width="25%">
                  <Box
                    h="120px"
                    w="120px"
                    borderRadius="50%"
                    bg={"url('/avatars/zykov_dmitry.jpg') no-repeat"}
                    bgSize="auto 120px"
                    boxShadow="dark-lg"
                    p="6"
                    mb="16px"
                  ></Box>
                  <Text as="b">Zykov Dmitry</Text>
                  <Text>Role</Text>
                </Flex>
                <Flex direction="column" align="center" width="25%">
                  <Box
                    h="120px"
                    w="120px"
                    borderRadius="50%"
                    bg={"url('/avatars/alexey_senchenko.jpg') no-repeat"}
                    bgSize="auto 120px"
                    boxShadow="dark-lg"
                    p="6"
                    mb="16px"
                  ></Box>
                  <Text as="b">Alexey Senchenko</Text>
                  <Text>Role</Text>
                </Flex>
                <Flex direction="column" align="center" width="25%">
                  <Box
                    h="120px"
                    w="120px"
                    borderRadius="50%"
                    bg={"url('/avatars/danil.jpg') no-repeat"}
                    bgSize="auto 120px"
                    boxShadow="dark-lg"
                    p="6"
                    mb="16px"
                  ></Box>
                  <Text as="b">Danil</Text>
                  <Text>Role</Text>
                </Flex>
                <Flex direction="column" align="center" width="25%">
                  <Box
                    h="120px"
                    w="120px"
                    borderRadius="50%"
                    bg={"url('/avatars/ali_baybutov.jpg') no-repeat -40px 0"}
                    bgSize="auto 120px"
                    boxShadow="dark-lg"
                    p="6"
                    mb="16px"
                  ></Box>
                  <Text as="b">Ali Baybutov</Text>
                  <Text>Frontend Developer</Text>
                </Flex>
              </Flex>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box bgColor="gray.100">
        <Container maxW="1000px">
          <Box maxH="1200px" py="140px">
            <Text fontSize={{ base: "21px", lg: "30px" }} as="b">
              Our Investors
            </Text>
            <Divider borderColor="black" mb="90px" />
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default About;
