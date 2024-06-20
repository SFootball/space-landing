import { Flex, Box, Container, Text, Divider, Image } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { PreloadImage } from "src/shared/components/PreloadImage";

export const About = () => {
  const { t } = useTranslation();

  const management = [
    {
      name: "Denis Yunusov",
      position: "CEO",

      imgSRC: "/images/avatars/denis_yunusov.jpg",
      width: "120px",
      height: "120px",
      hash: "T9N0@;M{ui4Tog?wY6Rjq[S#j[w^",
      borderRadius: "50%",
      objectPosition: "right -48px bottom 0",
      mb: "10px",
    },
    {
      name: "Ildar Nasyrov",
      position: "CTO",
      imgSRC: "/images/avatars/ildar_nasyrov.jpeg",
      width: "120px",
      height: "120px",
      hash: "TOFi$7%gY7?v?^Io.SSgR4EMkXMc",
      borderRadius: "50%",
      objectPosition: "right 0 bottom 0",
      mb: "10px",
    },
  ];

  const coreTeam = [
    {
      name: "Anton Tuktarev",
      position: "Content Manager",
      imgSRC: "/images/avatars/tuktarev_anton.jpg",
      width: "120px",
      height: "120px",
      hash: "T48M?Wxa01D%s:oz5SNH}?Fdj[#S",
      borderRadius: "50%",
      objectPosition: "right -48px bottom 0",
      mb: "10px",
    },
    {
      name: "Leisan",
      position: "PR Manager",
      imgSRC: "/images/avatars/leisan.jpg",
      width: "120px",
      height: "120px",
      hash: "T7AvzpE10000-p_4X:IoZ#9Ft7-;",
      borderRadius: "50%",
      objectPosition: "right -48px bottom 0",
      mb: "10px",
    },
    {
      name: "Dmitry Zykov",
      position: "ML Engineer",
      imgSRC: "/images/avatars/zykov_dmitry.jpg",
      width: "120px",
      height: "120px",
      hash: "UbL;me00~q-;?b%Mt7M{Rjt7fQM{xuM{M{t7",
      borderRadius: "50%",
      objectPosition: "right 0 bottom 0",
      mb: "10px",
    },
    {
      name: "Alexey Senchenko",
      position: "Art Manager",
      imgSRC: "/images/avatars/alexey_senchenko.jpg",
      width: "120px",
      height: "120px",
      hash: "U-NTkAog_MRiNNa}s%jZ.7oIRPfmxUoJbdWY",
      borderRadius: "50%",
      objectPosition: "right 0 bottom 0",
      mb: "10px",
    },
    {
      name: "Danil",
      position: "Smart Contract Developer",
      imgSRC: "/images/avatars/danil.jpg",
      width: "120px",
      height: "120px",
      hash: "URS6SsWB~qxua}j[t7ay-;j[IUWBxuayNGj[",
      borderRadius: "50%",
      objectPosition: "right 0 bottom 0",
      mb: "10px",
    },
    {
      name: "Ali Baybutov",
      position: "Frontend Developer",
      imgSRC: "/images/avatars/ali_baybutov.jpg",
      width: "120px",
      height: "120px",
      hash: "LiM%}}%M?bIU~qWBRjayRjxuj[t7",
      borderRadius: "50%",
      objectPosition: "right -18px bottom 0",
      mb: "10px",
    },
    {
      name: "Karina Kanchurina",
      position: "Test Engineer",
      imgSRC: "/images/avatars/karina_kanchurina.jpg",
      width: "120px",
      height: "120px",
      hash: "LJLq5{.8_N%2Dit7.8Rj%#WBMdX8",
      borderRadius: "50%",
      objectPosition: "right -44px bottom 0",
      mb: "10px",
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
                      width={person.width}
                      height={person.height}
                      hash={person.hash}
                      borderRadius={person.borderRadius}
                      objectPosition={person.objectPosition}
                      mb={person.mb}
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
                      width={person.width}
                      height={person.height}
                      hash={person.hash}
                      borderRadius={person.borderRadius}
                      objectPosition={person.objectPosition}
                      mb={person.mb}
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
