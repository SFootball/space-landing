import { Flex, Box, Container, Text, Divider, Image } from "@chakra-ui/react";

function About() {
  const management = [
    {
      name: "Denis Yunusov",
      position: "Co-Founder, CEO",
      bg: "url('/images/avatars/denis_yunusov.jpg') no-repeat -44px 0",
    },
    {
      name: "Ildar Nasyrov",
      position: "Co-Founder, CTO",
      bg: "url('/images/avatars/ildar_nasyrov.jpeg') no-repeat",
    },
  ];

  const coreTeam = [
    {
      name: "Anton Tuktarev",
      position: "Position",
      bg: "url('/images/avatars/tuktarev_anton.jpg') no-repeat -42px 0",
    },
    {
      name: "Leisan",
      position: "Position",
      bg: "gray.100",
    },
    {
      name: "Dmitry Zykov",
      position: "Position",
      bg: "url('/images/avatars/zykov_dmitry.jpg') no-repeat",
    },
    {
      name: "Alexey Senchenko",
      position: "Position",
      bg: "url('/images/avatars/alexey_senchenko.jpg') no-repeat",
    },
    {
      name: "Danil",
      position: "Position",
      bg: "url('/images/avatars/danil.jpg') no-repeat",
    },
    {
      name: "Ali Baybutov",
      position: "Position",
      bg: "url('/images/avatars/ali_baybutov.jpg') no-repeat -40px 0",
    },
    {
      name: "Karina Kanchurina",
      position: "Position",
      bg: "url('/images/avatars/karina_kanchurina.jpg') no-repeat -46px 0",
    },
  ];

  return (
    <Box as="main">
      <Box bgColor="gray.100">
        <Container maxW="1200px">
          <Flex
            maxH="1500px"
            py={{ base: "90px", lg: "140px" }}
            direction="column"
            gap="50px"
          >
            <Flex
              direction={{ base: "column", lg: "row" }}
              justifyContent="center"
              alignItems="center"
              gap="50px"
            >
              <Box
                h="300px"
                w="300px"
                borderRadius="50%"
                bg="url('/images/common/stadium.jpg') no-repeat 0 -36px"
                bgSize="300px auto"
                boxShadow="dark-lg"
                p="6"
              />
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
            <Flex
              direction={{ base: "column-reverse", lg: "row" }}
              justifyContent="center"
              alignItems="center"
              gap="50px"
            >
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
                bg="url('/images/common/ball.jpg') no-repeat -190px 0"
                bgSize="auto 300px"
                boxShadow="dark-lg"
                p="6"
              />
            </Flex>
          </Flex>
        </Container>
      </Box>
      <Box bgColor="white">
        <Container maxW="1000px">
          <Box maxH="1600px" pt={{ base: "90px", lg: "140px" }}>
            <Box mb={{ base: "90px", lg: "140px" }}>
              <Text fontSize={{ base: "21px", lg: "30px" }} as="b">
                Management
              </Text>
              <Divider borderColor="black" mb={{ base: "45px", lg: "90px" }} />
              <Flex justify="center" align="start">
                {management.map((person) => (
                  <Flex
                    direction="column"
                    align="center"
                    width={{ base: "50%", lg: "25%" }}
                  >
                    <Box
                      h="120px"
                      w="120px"
                      borderRadius="50%"
                      bg={person.bg}
                      bgSize="auto 120px"
                      boxShadow="dark-lg"
                      p="6"
                      mb="16px"
                    />
                    <Text fontSize={{ base: "13px", lg: "18px" }} as="b">
                      {person.name}
                    </Text>
                    <Text fontSize={{ base: "13px", lg: "18px" }}>
                      {person.position}
                    </Text>
                  </Flex>
                ))}
              </Flex>
            </Box>
            <Box mb={{ base: "90px", lg: "140px" }}>
              <Text fontSize={{ base: "21px", lg: "30px" }} as="b">
                Core team
              </Text>
              <Divider borderColor="black" mb={{ base: "45px", lg: "90px" }} />
              <Flex justify="start" align="start" wrap="wrap" rowGap="60px">
                {coreTeam.map((person) => (
                  <Flex
                    direction="column"
                    align="center"
                    width={{ base: "50%", lg: "25%" }}
                  >
                    <Box
                      h="120px"
                      w="120px"
                      borderRadius="50%"
                      bg={person.bg}
                      bgSize="auto 120px"
                      boxShadow="dark-lg"
                      p="6"
                      mb="16px"
                    />
                    <Text fontSize={{ base: "13px", lg: "18px" }} as="b">
                      {person.name}
                    </Text>
                    <Text fontSize={{ base: "13px", lg: "18px" }}>
                      {person.position}
                    </Text>
                  </Flex>
                ))}
              </Flex>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box bgColor="gray.100">
        <Container maxW="1000px">
          <Box maxH="1200px" py={{ base: "90px", lg: "140px" }}>
            <Text fontSize={{ base: "21px", lg: "30px" }} as="b">
              Our Investors
            </Text>
            <Divider borderColor="black" mb={{ base: "45px", lg: "90px" }} />
            <Flex justify="center" align="start" gap="60px">
              <Flex
                align="center"
                justify="center"
                w="25%"
                minH="80px"
                borderBottom="1px solid black"
              >
                <Image src="/images/logos/DCVC.webp" maxH="60px" />
              </Flex>
              <Flex
                align="center"
                justify="center"
                w="25%"
                minH="80px"
                borderBottom="1px solid black"
              >
                <Image src="/images/logos/pantera.webp" maxH="60px" />
              </Flex>
              <Flex
                align="center"
                justify="center"
                w="25%"
                minH="80px"
                borderBottom="1px solid black"
              >
                <Image src="/images/logos/paradigm.webp" maxH="60px" />
              </Flex>
              <Flex
                align="center"
                justify="center"
                w="25%"
                minH="80px"
                borderBottom="1px solid black"
              >
                <Image src="/images/logos/sequoia.webp" maxH="60px" />
              </Flex>
            </Flex>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default About;
