import { Flex, Box, Container, Text, Divider, Image } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { PreloadImage } from "src/shared/components/PreloadImage";
import { imgPathMap } from "src/shared/constants/imgPathMap";

export const About = () => {
  const { t } = useTranslation();

  const {
    denisYunusov,
    ildarNasyrov,
    antonTuktarev,
    leisan,
    dmitryZykov,
    alexeySenchenko,
    danil,
    aliBaybutov,
    karinaKanchurina,
  } = imgPathMap;

  const management = [
    {
      name: "Denis Yunusov",
      position: "CEO",
      imgSRC: denisYunusov.path,
      hash: denisYunusov.hash,
      objectPosition: "right -48px bottom 0",
    },
    {
      name: "Ildar Nasyrov",
      position: "CTO",
      imgSRC: ildarNasyrov.path,
      hash: ildarNasyrov.hash,
      objectPosition: "right 0 bottom 0",
    },
  ];

  const coreTeam = [
    {
      name: "Anton Tuktarev",
      position: "Content Manager",
      imgSRC: antonTuktarev.path,
      hash: antonTuktarev.hash,
      objectPosition: "right -48px bottom 0",
    },
    {
      name: "Leisan",
      position: "PR Manager",
      imgSRC: leisan.path,
      hash: leisan.hash,
      objectPosition: "right -48px bottom 0",
    },
    {
      name: "Dmitry Zykov",
      position: "ML Engineer",
      imgSRC: dmitryZykov.path,
      hash: dmitryZykov.hash,
      objectPosition: "right 0 bottom 0",
    },
    {
      name: "Alexey Senchenko",
      position: "Art Manager",
      imgSRC: alexeySenchenko.path,
      hash: alexeySenchenko.hash,
      objectPosition: "right 0 bottom 0",
    },
    {
      name: "Danil",
      position: "Smart Contract Developer",
      imgSRC: danil.path,
      hash: danil.hash,
      objectPosition: "right 0 bottom 0",
    },
    {
      name: "Ali Baybutov",
      position: "Frontend Developer",
      imgSRC: aliBaybutov.path,
      hash: aliBaybutov.hash,
      objectPosition: "right -18px bottom 0",
    },
    {
      name: "Karina Kanchurina",
      position: "Test Engineer",
      imgSRC: karinaKanchurina.path,
      hash: karinaKanchurina.hash,
      objectPosition: "right -44px bottom 0",
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
              <PreloadImage
                imgSRC="/images/common/stadium.jpg"
                width="300px"
                height="300px"
                hash="TB9j+TWCD*~qaxM{00fRxs00og%M"
                borderRadius="50%"
                objectPosition=""
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
              <PreloadImage
                imgSRC="/images/common/ball.jpg"
                width="300px"
                height="300px"
                hash="L?Fa5|YRv|xXyC$_slsqesn~xYR."
                borderRadius="50%"
                objectPosition="right 0 bottom 0"
              />
            </Flex>
            <Flex
              direction={{ base: "column", lg: "row" }}
              justifyContent="center"
              alignItems="center"
              gap="50px"
            >
              <PreloadImage
                imgSRC="/images/common/match.jpg"
                width="300px"
                height="300px"
                hash="L5D03|wRA0bV00_2~WD+GgD*a0%N"
                borderRadius="50%"
                objectPosition="left -60px bottom 0"
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
              <PreloadImage
                imgSRC="/images/common/scaut.jpg"
                width="300px"
                height="300px"
                hash="LPALkuoJD,WCu6kCICWBtSfljDf5"
                borderRadius="50%"
                objectPosition="left -16px bottom 0"
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
                    key={person.name}
                    direction="column"
                    align="center"
                    width={{ base: "50%", lg: "25%" }}
                  >
                    <PreloadImage
                      imgSRC={person.imgSRC}
                      width="120px"
                      height="120px"
                      hash={person.hash}
                      borderRadius="50%"
                      objectPosition={person.objectPosition}
                      mb="10px"
                    />
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
                    <PreloadImage
                      imgSRC={person.imgSRC}
                      width="120px"
                      height="120px"
                      hash={person.hash}
                      borderRadius="50%"
                      objectPosition={person.objectPosition}
                      mb="10px"
                    />
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
};
