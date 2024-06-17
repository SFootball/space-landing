import { Flex, Box, Container, Text, Divider, Image } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import StadiumImg from "../../shared/components/ContentImgs/StadiumImg";
import BallImg from "../../shared/components/ContentImgs/BallImg";
import MatchImg from "../../shared/components/ContentImgs/MatchImg";
import ScautImg from "../../shared/components/ContentImgs/ScautImg";
import IldarIcon from "src/shared/components/TeamIcons/IldarIcon";
import DenisIcon from "src/shared/components/TeamIcons/DenisIcon";
import AntonIcon from "src/shared/components/TeamIcons/AntonIcon";
import LeisanIcon from "src/shared/components/TeamIcons/LeisanIcon";
import DmitryIcon from "src/shared/components/TeamIcons/DmitryIcon";
import AlexeyIcon from "src/shared/components/TeamIcons/AlexeyIcon";
import DanilIcon from "src/shared/components/TeamIcons/DanilIcon";
import AliIcon from "src/shared/components/TeamIcons/AliIcon";
import KarinaIcon from "src/shared/components/TeamIcons/KarinaIcon";

function About() {
  const { t } = useTranslation();

  const management = [
    {
      name: "Denis Yunusov",
      position: "CEO",
      icon: <DenisIcon />,
    },
    {
      name: "Ildar Nasyrov",
      position: "CTO",
      icon: <IldarIcon />,
    },
  ];

  const coreTeam = [
    {
      name: "Anton Tuktarev",
      position: "Content Manager",
      icon: <AntonIcon />,
    },
    {
      name: "Leisan",
      position: "PR Manager",
      icon: <LeisanIcon />,
    },
    {
      name: "Dmitry Zykov",
      position: "ML Engineer",
      icon: <DmitryIcon />,
    },
    {
      name: "Alexey Senchenko",
      position: "Art Manager",
      icon: <AlexeyIcon />,
    },
    {
      name: "Danil",
      position: "Smart Contract Developer",
      icon: <DanilIcon />,
    },
    {
      name: "Ali Baybutov",
      position: "Frontend Developer",
      icon: <AliIcon />,
    },
    {
      name: "Karina Kanchurina",
      position: "Test Engineer",
      icon: <KarinaIcon />,
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
              <StadiumImg />
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
              <BallImg />
            </Flex>
            <Flex
              direction={{ base: "column", lg: "row" }}
              justifyContent="center"
              alignItems="center"
              gap="50px"
            >
              <MatchImg />
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
              <ScautImg />
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
                    key={person.name}
                    direction="column"
                    align="center"
                    width={{ base: "50%", lg: "25%" }}
                  >
                    {person.icon}
                    <Text fontSize={{ base: "13px", lg: "18px" }} as="b">
                      {t(`${person.name}`)}
                    </Text>
                    <Text
                      textAlign="center"
                      fontSize={{ base: "13px", lg: "18px" }}
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
                    key={person.name}
                    direction="column"
                    align="center"
                    width={{ base: "50%", lg: "25%" }}
                  >
                    {person.icon}
                    <Text fontSize={{ base: "13px", lg: "18px" }} as="b">
                      {t(`${person.name}`)}
                    </Text>
                    <Text
                      textAlign="center"
                      fontSize={{ base: "13px", lg: "18px" }}
                    >
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
