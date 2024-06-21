import { Flex, Box, Container, Text, Image, Heading } from "@chakra-ui/react";
import { Background } from "./Background";
import { useTranslation } from "react-i18next";

const laptopImgSRC_1 = "/images/common/1.png";
const laptopImgSRC_2 = "/images/common/2.png";
const laptopImgSRC_3 = "/images/common/3.png";
const laptopImgSRC_4 = "/images/common/4.png";
const dataImgSRC_1 = "/images/common/5-1.png";
const dataImgSRC_2 = "/images/common/5-2.png";

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
          <Text
            display="inline-block"
            fontSize={{ base: "18px", lg: "26px" }}
            as="b"
          >
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
            <Flex justify="space-between" align="center">
              <Image src={laptopImgSRC_1} maxW="48%" />
              <Box>
                <Text fontSize={{ base: "18px", lg: "26px" }} as="b" mb="24px">
                  {t("SFOOTBALL SOLUTIONS")}
                </Text>
                <Box mb="36px" fontSize={{ base: "13px", lg: "18px" }}>
                  <p>• {t("Technical match filming")};</p>
                  <p>• {t("Video and advanced statistics")};</p>
                  <p>• {t("Detailed post-match reports")};</p>
                  <p>• {t("Statistical live data collection")};</p>
                  <p>• {t("Player fitness tracking reports")};</p>
                  <p>• {t("Raw data delivered in live mode")}.</p>
                </Box>
                <Box fontSize={{ base: "13px", lg: "18px" }}>
                  {t("Services to be launched in the short term")}:
                  <p>• {t("24/7 technical support")};</p>
                  <p>• {t("Live fitness tracking")};</p>
                  <p>• {t("Analytical opponent’s prescout reports")};</p>
                  <p>• {t("Post-match referee reports")};</p>
                  <p>• {t("Offline and online tagging software")}.</p>
                </Box>
              </Box>
            </Flex>
            <Flex justify="space-between" align="center">
              <Box>
                <Text fontSize={{ base: "18px", lg: "26px" }} as="b" mb="24px">
                  {t("SFOOTBALL PLATFORM FOR COACHES")}
                </Text>
                <Box fontSize={{ base: "13px", lg: "18px" }}>
                  <p>• {t("Video breakdown of own and opponent’s matches")};</p>
                  <p>
                    •{" "}
                    {t(
                      "Various options to review a match: full match video, ball-in-play mode, and highlights"
                    )}
                    ;
                  </p>
                  <p>
                    •{" "}
                    {t(
                      "Several video tracks available for a review: TV streams or technical footage"
                    )}
                    ;
                  </p>
                  <p>
                    •{" "}
                    {t(
                      "Video player with the option to accelerate the video speed"
                    )}
                    ;
                  </p>
                  <p>
                    •{" "}
                    {t(
                      "Quick video download with the 1080p or 720p resolution"
                    )}
                    ;
                  </p>
                  <p>• {t("Customizable statistical spreadsheets")}.</p>
                </Box>
              </Box>
              <Image src={laptopImgSRC_2} maxW="48%" />
            </Flex>
            <Flex justify="space-between" align="center">
              <Image src={laptopImgSRC_3} maxW="48%" />
              <Box pl={{ base: "30px", lg: "100px" }}>
                <Text fontSize={{ base: "18px", lg: "26px" }} as="b" mb="24px">
                  {t("SFOOTBALL PLATFORM FOR PLAYER RECRUITMENT")}
                </Text>
                <Box fontSize={{ base: "13px", lg: "18px" }}>
                  <p>
                    •{" "}
                    {t(
                      "Filter players by their statistics to find the best candidates"
                    )}
                    ;
                  </p>
                  <p>• {t("Quick access to review all player actions")};</p>
                  <p>
                    •{" "}
                    {t(
                      "Watch statistical metrics that are linked to the video"
                    )}
                    ;
                  </p>
                  <p>
                    •{" "}
                    {t(
                      "Share any video in two clicks with your team via email"
                    )}
                    .
                  </p>
                </Box>
              </Box>
            </Flex>
            <Flex justify="space-between" align="center">
              <Box>
                <Text fontSize={{ base: "18px", lg: "26px" }} as="b" mb="24px">
                  {t("STATISTICAL REPORTS")}
                </Text>
                <Box fontSize={{ base: "13px", lg: "18px" }}>
                  <p>• {t("Real-time statistical match analysis")};</p>
                  <p>• {t("Statistical post-match team and player report")};</p>
                  <p>• {t("Team and tournament summary reports")};</p>
                  <p>• {t("New advanced metrics developed")};</p>
                  <p>• {t("Data quality control")}.</p>
                </Box>
              </Box>
              <Image src={laptopImgSRC_4} maxW="48%" />
            </Flex>
            <Flex justify="space-between" align="center">
              <Image src={dataImgSRC_1} maxW="48%" />
              <Box>
                <Text fontSize={{ base: "18px", lg: "26px" }} as="b" mb="24px">
                  {t("PLAYER FITNESS TRACKING REPORTS")}
                </Text>
                <Box fontSize={{ base: "13px", lg: "18px" }}>
                  <p>
                    •{" "}
                    {t(
                      "Fitness tracking data about your own team as well as the opponents"
                    )}
                    ;
                  </p>
                  <p>
                    •{" "}
                    {t(
                      "Speed and covered distance metrics available for each player"
                    )}
                    ;
                  </p>
                  <p>
                    •{" "}
                    {t(
                      "Player position charts showing the team gaps in offense and defense"
                    )}
                    ;
                  </p>
                  <p>• {t("New metrics combining event and fitness data")};</p>
                  <p>• {t("Proven data collection methodology")}.</p>
                </Box>
              </Box>
            </Flex>
            <Flex justify="space-between" align="center">
              <Box pr="50px">
                <Text fontSize={{ base: "18px", lg: "26px" }} as="b" mb="24px">
                  {t("RAW DATA")}
                </Text>
                <Box fontSize={{ base: "13px", lg: "18px" }}>
                  <p>• {t("Over 2500 metrics")};</p>
                  <p>• {t("Data available in XML and JSON formats")};</p>
                  <p>
                    •{" "}
                    {t(
                      "Tailor-made assistance and guidance on how to use the data for a website or on social media"
                    )}
                    .
                  </p>
                </Box>
              </Box>
              <Image src={dataImgSRC_2} maxW="48%" />
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};
