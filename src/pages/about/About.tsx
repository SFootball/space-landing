import { Flex, Box, Container, Text, Divider, Image } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const stadiumImgURL = "/images/common/stadium.jpg";
const ballImgURL = "/images/common/ball.jpg";
const matchImgURL = "/images/common/match.jpg";
const scautImgURL = "/images/common/scaut.svg";

function About() {
  const { t } = useTranslation();

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
      position: "Frontend Developer",
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
            maxH="2500px"
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
                bg={`url('${stadiumImgURL}') no-repeat 0 -36px`}
                bgSize="300px auto"
                boxShadow="dark-lg"
                p="6"
              />
              <Box maxW="600px">
                <Text fontSize={{ base: "32px", lg: "46px" }} as="b">
                  {t("Who we are?")}
                </Text>
                <Text fontSize={{ base: "14px", lg: "20px" }}>
                  {t(
                    "We are the best place to present you as a football player. Join us and kickstart your journey towards football success, regardless of your country. Just follow our promts. And we will take care of the rest."
                  )}
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
                  {t("Our Mission")}
                </Text>
                <Text fontSize={{ base: "14px", lg: "20px" }}>
                  {t(
                    "We aim to help young, aspiring football players from all of the world to excel in their professional careers by using contemporary IT solutions, such as machine learning, blockchain, neural networks, customized and user-friendly software. And of course, on the other hand we aim to facilitate the work of coaches, analysts, scouts as well as journalists and commentators."
                  )}
                </Text>
              </Box>
              <Box
                h="300px"
                w="300px"
                borderRadius="50%"
                bg={`url('${ballImgURL}') no-repeat -190px 0`}
                bgSize="auto 300px"
                boxShadow="dark-lg"
                p="6"
              />
            </Flex>
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
                bg={`url('${matchImgURL}') no-repeat -60px 0`}
                bgSize="auto 300px"
                boxShadow="dark-lg"
                p="6"
              />
              <Box maxW="600px">
                <Text fontSize={{ base: "32px", lg: "46px" }} as="b">
                  {t("How does it work?")}
                </Text>
                <Text fontSize={{ base: "14px", lg: "20px" }}>
                  {t(
                    "If you are a football player, you just have to sign up on this application and enter your data, such as your date of birth, gender, skills, video of your matches  and so on. After signing up your visibility will be increasing within the football community."
                  )}{" "}
                  <Text as="b">
                    {t("And by the way you will get your own NFT.")}
                  </Text>
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
                <Text fontSize={{ base: "14px", lg: "20px" }}>
                  <Text fontSize={{ base: "32px", lg: "46px" }} as="b">
                    {t("If you are not a player")}
                  </Text>
                  ,{" "}
                  {t(
                    "you need to sign up as a scout or a user. As a result you will receive all information and tools to closely observe the players."
                  )}
                </Text>
              </Box>
              <Box
                h="300px"
                w="300px"
                borderRadius="50%"
                bg={`url('${scautImgURL}') no-repeat -18px 0`}
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
                {t("Management")}
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
                      {t(`${person.name}`)}
                    </Text>
                    <Text
                      textAlign="center"
                      fontSize={{ base: "13px", lg: "18px" }}
                      px="10px"
                    >
                      {t(`${person.position}`)}
                    </Text>
                  </Flex>
                ))}
              </Flex>
            </Box>
            <Box mb={{ base: "90px", lg: "140px" }}>
              <Text fontSize={{ base: "21px", lg: "30px" }} as="b">
                {t("Core team")}
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
                      {t(`${person.name}`)}
                    </Text>
                    <Text fontSize={{ base: "13px", lg: "18px" }}>
                      {t(`${person.position}`)}
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
              {t("Our Investors")}
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
