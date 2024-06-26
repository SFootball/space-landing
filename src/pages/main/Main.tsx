import { Flex, Box, Container, Text, Image, Heading } from "@chakra-ui/react";
import { Background } from "./Background";
import { useTranslation } from "react-i18next";

const videoWithStatImgSRC = "/images/common/are-you-footballer_1.png";
const reachForStarImgSRC = "/images/common/reach-for-star_1.png";
const areYouCoachImgSRC = "/images/common/are-you-coach_1.png";
const areYouScautImgSRC = "/images/common/are-you-scaut_1.png";

export const Main = () => {
  const { t } = useTranslation();
  return (
    <Box width="100%" minH="100vh" bgColor="transparent">
      <Background />
      <Flex
        maxW="1200px"
        minH={{ base: "420px", lg: "calc(100vh - 110px)" }}
        justify="center"
        align="center"
        margin="0 auto"
        px="20px"
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          direction="column"
          py="16px"
        >
          <Heading
            fontSize={{ base: "56px", lg: "72px" }}
            marginBottom="54px"
            fontWeight="bold"
            color="white"
            textAlign="center"
            width={{ base: "350px", sm: "auto" }}
          >
            {t("Professionals rely on numbers!")}
          </Heading>
          <Box
            color="white"
            fontSize={{ base: "32px", lg: "46px" }}
            textAlign="center"
          >
            {t("All in one statistical solution")}
          </Box>
        </Flex>
      </Flex>
      <Box bgColor="white">
        <Container maxW="1200px">
          {/* <Flex maxH="720px" py="90px" justify="center" align="center">
            <iframe
              width="960"
              height="540"
              src="https://www.youtube.com/embed/5hPsXvKzZnU?si=Sr2UixtM5dGM6ekp"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </Flex> */}
        </Container>
        <Container
          maxW="760px"
          maxH="1320px"
          py={{ base: "75px", lg: "150px" }}
          px={{ base: "30px", lg: "0px" }}
        >
          <Text
            display="inline-block"
            fontSize={{ base: "56px", lg: "72px" }}
            as="b"
            textAlign="center"
            mb="64px"
          >
            {t("Who we are?")}
          </Text>
          <Text display="block" fontSize={{ base: "18px", lg: "26px" }} as="b">
            {t("FIND OUT ABOUT THE BEST YOUNG FOOTBALL PLAYERS")}
          </Text>
          <Text fontSize={{ base: "14px", lg: "20px" }} mb="54px">
            {t(
              "SFootball is a new digital project dedicated to set up a football analytics, using machine learning, blockchain, neural networks, customized and user-friendly software. Explore the best advanced soccer stats and free stats which you have not seen before. Look for young promising players in our database."
            )}
          </Text>
          <Text fontSize={{ base: "18px", lg: "26px" }} as="b" mb="36px">
            {t("OUR MISSION")}
          </Text>
          <Text fontSize={{ base: "14px", lg: "20px" }} mb="54px">
            {t("Development of world football through digital technologies.")}
          </Text>
          <Text fontSize={{ base: "18px", lg: "26px" }} as="b" mb="36px">
            {t("OUR ENERGY")}
          </Text>
          <Text fontSize={{ base: "14px", lg: "20px" }} mb="54px">
            {t(
              "A young team of motivated and charged specialists united by one goal."
            )}
          </Text>
          <Text fontSize={{ base: "18px", lg: "26px" }} as="b" mb="36px">
            {t("COMPARE YOURSELF")}
          </Text>
          <Text fontSize={{ base: "14px", lg: "20px" }} mb="54px">
            {t(
              "Compare yourself with the best players in the world or with your friends using our reports."
            )}
          </Text>
          <Text fontSize={{ base: "18px", lg: "26px" }} as="b" mb="36px">
            {t("PREDICTIONS")}
          </Text>
          <Text fontSize={{ base: "14px", lg: "20px" }} mb="54px">
            {t(
              "Applying rigorous statistical models and advanced algorithms, we provide young players to showcase their talent in a professional setting Our predictions are the most accurate. Get to know the complete player reports, enriched with extensive analytical data. This analysis offers a comprehensive overview to gain a deeper understanding of a player's potential and make informed predictions about his future performance in football."
            )}
          </Text>
        </Container>
      </Box>
      <Box bgColor="gray.100">
        <Container
          maxW="1200px"
          maxH="3300px"
          pt={{ base: "135px", xl: "135px" }}
          pb={{ base: "165px", xl: "165px" }}
          px={{ base: "30px", xl: "60px" }}
        >
          <Flex direction="column" gap="50px">
            <Flex
              justify="space-between"
              align={{ base: "center", md: "start" }}
              direction={{ base: "column", md: "row" }}
            >
              <Image
                borderRadius="30px"
                src={videoWithStatImgSRC}
                maxW={{ base: "90%", md: "48%" }}
                shadow="xl"
                mr={{ base: "0", md: "20px" }}
                mb={{ base: "20px", md: "0" }}
              />
              <Box>
                <Text fontSize={{ base: "18px", lg: "26px" }} as="b" mb="24px">
                  {t(
                    "ARE YOU A FOOTBALL PLAYER? THEN THERE WILL BE A LOT OF USEFUL THINGS FOR YOU"
                  )}
                </Text>
                <Box mb="36px" fontSize={{ base: "13px", lg: "18px" }}>
                  <p>• {t("Upload videos of your matches on the site")};</p>
                  <p>
                    •{" "}
                    {t(
                      "Get detailed statistics about your game based on video"
                    )}
                    ;
                  </p>
                  <p>• {t("Analyze the effectiveness of your actions")}.</p>
                </Box>
              </Box>
            </Flex>
            <Flex
              justify="space-between"
              align={{ base: "center", md: "start" }}
              direction={{ base: "column-reverse", md: "row" }}
            >
              <Box>
                <Text fontSize={{ base: "18px", lg: "26px" }} as="b" mb="24px">
                  {t("REACH FOR THE STAR")}
                </Text>
                <Box fontSize={{ base: "13px", lg: "18px" }}>
                  <p>• {t("Fill out your game stats")};</p>
                  <p>• {t("Choose your favorite player you're aiming for")};</p>
                  <p>
                    •{" "}
                    {t(
                      "See where you are inferior to him and what you need to work on"
                    )}
                    ;
                  </p>
                  <p>• {t("Get your own NFT")}.</p>
                </Box>
              </Box>
              <Image
                src={reachForStarImgSRC}
                maxW={{ base: "90%", md: "48%" }}
                shadow="xl"
                borderRadius="30px"
                mb={{ base: "20px", md: "0" }}
              />
            </Flex>
            <Flex
              justify="space-between"
              align={{ base: "center", md: "start" }}
              direction={{ base: "column", md: "row" }}
            >
              <Image
                src={areYouCoachImgSRC}
                maxW={{ base: "90%", md: "48%" }}
                mb={{ base: "20px", md: "0" }}
                shadow="xl"
                borderRadius="30px"
              />
              <Box pl={{ base: "0", md: "100px" }}>
                <Text fontSize={{ base: "18px", lg: "26px" }} as="b" mb="24px">
                  {t("ARE YOU A COACH? THEN DON'T PASS BY")}
                </Text>
                <Box fontSize={{ base: "13px", lg: "18px" }}>
                  <p>
                    •{" "}
                    {t(
                      "Get extended match statistics for your team and the opposing team"
                    )}
                    ;
                  </p>
                  <p>
                    •{" "}
                    {t(
                      "Analyze team and individual actions of football players"
                    )}
                    ;
                  </p>
                  <p>
                    •{" "}
                    {t(
                      "Do you want to achieve new heights in your coaching career? Look for a promising team around the world"
                    )}
                    ;
                  </p>
                  <p>
                    •{" "}
                    {t(
                      "Do you dream of forming your own team? Look for talented guys around the world"
                    )}
                    .
                  </p>
                </Box>
              </Box>
            </Flex>
            <Flex
              justify="space-between"
              align={{ base: "center", md: "start" }}
              direction={{ base: "column-reverse", md: "row" }}
            >
              <Box>
                <Text fontSize={{ base: "18px", lg: "26px" }} as="b" mb="24px">
                  {t("ARE YOU A SCAUT? BECOME MORE EFFECTIVE WITH US")}
                </Text>
                <Box fontSize={{ base: "13px", lg: "18px" }}>
                  <p>
                    •{" "}
                    {t(
                      "Expand your geography by finding future stars in unknown hinterlands and big cities"
                    )}
                    ;
                  </p>
                  <p>
                    •{" "}
                    {t(
                      "Filter football players by playing and physical characteristics"
                    )}
                    ;
                  </p>
                  <p>
                    •{" "}
                    {t("View their matches, complete with advanced statistics")}
                    ;
                  </p>
                  <p>
                    •{" "}
                    {t(
                      "Send an invitation to the player you are interested in"
                    )}
                    .
                  </p>
                </Box>
              </Box>
              <Image
                src={areYouScautImgSRC}
                maxW={{ base: "90%", md: "48%" }}
                mb={{ base: "20px", md: "0" }}
                shadow="xl"
                borderRadius="30px"
              />
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};
