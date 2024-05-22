import { Flex, Box, Container, Text, Image, Heading } from "@chakra-ui/react";

export const bgImgURL = "/images/footballer.jpg";

function Main() {
  return (
    <Box
      bgImage={bgImgURL}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center"
      bgAttachment="fixed"
    >
      <Box as="main">
        <Container maxW="1200px">
          <Flex
            h="calc(100vh - 110px)"
            justifyContent="center"
            alignItems="center"
            direction="column"
          >
            <Heading
              fontSize={{ base: "56px", lg: "72px" }}
              marginBottom="54px"
              fontWeight="bold"
              color="white"
              textAlign="center"
            >
              Professionals rely on numbers!
            </Heading>
            <Box
              color="white"
              fontSize={{ base: "32px", lg: "46px" }}
              textAlign="center"
            >
              All in one statistical solution
            </Box>
          </Flex>
        </Container>
        <Box bgColor="white">
          <Container maxW="1200px">
            <Flex maxH="720px" py="90px" justify="center" align="center">
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
            </Flex>
          </Container>
          <Container
            maxW="760px"
            maxH="1280px"
            py={{ base: "75px", lg: "150px" }}
          >
            <Text
              fontSize={{ base: "56px", lg: "72px" }}
              as="b"
              textAlign="center"
              mb="72px"
            >
              Who we are?
            </Text>
            <Text fontSize={{ base: "14px", lg: "20px" }} mb="54px">
              SFootball is a new digital project dedicated to set up a football
              analytics. The project provides a wide range of services covering
              all possible customer requests, statistical post-match reports,
              raw data, player fitness tracking reports, and analytical player
              reports.
            </Text>
            <Text fontSize={{ base: "18px", lg: "26px" }} as="b" mb="36px">
              OUR MISSION
            </Text>
            <Text fontSize={{ base: "14px", lg: "20px" }} mb="54px">
              We aim at developing football with the contemporary IT solutions
              using machine learning, blockchain, neural networks, customized
              and user-friendly software which will facilitate the work for
              coaches, analysts, scouts as well as journalists and commentators.
              The SFootball services are fully customizable, so all the users
              will manage to find what they need.
            </Text>
            <Text fontSize={{ base: "18px", lg: "26px" }} as="b" mb="36px">
              OUR ENERGY
            </Text>
            <Text fontSize={{ base: "14px", lg: "20px" }} mb="54px">
              A young team of motivated and charged specialists united by one
              goal.
            </Text>
            <Text fontSize={{ base: "18px", lg: "26px" }} as="b" mb="36px">
              RELIABILITY
            </Text>
            <Text fontSize={{ base: "14px", lg: "20px" }} mb="54px">
              SFootball is a well-structured company with over 20 people in
              staff all around the world.
            </Text>
          </Container>
        </Box>
        <Box bgColor="gray.100">
          <Container
            maxW="1200px"
            maxH="3300px"
            pt={{ base: "135px", xl: "135px" }}
            pb={{ base: "165px", xl: "165px" }}
          >
            <Flex direction="column" gap="50px">
              <Flex justify="space-between" align="center">
                <Image src="/images/1.png" maxW="48%"></Image>
                <Box>
                  <Text
                    fontSize={{ base: "18px", lg: "26px" }}
                    as="b"
                    mb="24px"
                  >
                    SFOOTBALL SOLUTIONS
                  </Text>
                  <Box mb="36px" fontSize={{ base: "13px", lg: "18px" }}>
                    <p>• Technical match filming;</p>
                    <p>• Video and advanced statistics;</p>
                    <p>• Detailed post-match reports;</p>
                    <p>• Statistical live data collection;</p>
                    <p>• Player fitness tracking reports;</p>
                    <p>• Raw data delivered in live mode.</p>
                  </Box>
                  <Box fontSize={{ base: "13px", lg: "18px" }}>
                    Services to be launched in the short term:
                    <p>• 24/7 technical support;</p>
                    <p>• Live fitness tracking;</p>
                    <p>• Analytical opponent’s prescout reports;</p>
                    <p>• Post-match referee reports;</p>
                    <p>• Offline and online tagging software.</p>
                  </Box>
                </Box>
              </Flex>
              <Flex justify="space-between" align="center">
                <Box>
                  <Text
                    fontSize={{ base: "18px", lg: "26px" }}
                    as="b"
                    mb="24px"
                  >
                    SFOOTBALL PLATFORM FOR COACHES
                  </Text>
                  <Box fontSize={{ base: "13px", lg: "18px" }}>
                    <p>• Video breakdown of own and opponent’s matches;</p>
                    <p>
                      • Various options to review a match: full match video,
                      ball-in-play mode, and highlights;
                    </p>
                    <p>
                      • Several video tracks available for a review: TV streams
                      or technical footage;
                    </p>
                    <p>
                      • Video player with the option to accelerate the video
                      speed;
                    </p>
                    <p>
                      • Quick video download with the 1080p or 720p resolution;
                    </p>
                    <p>• Customizable statistical spreadsheets.</p>
                  </Box>
                </Box>
                <Image src="/images/2.png" maxW="48%"></Image>
              </Flex>
              <Flex justify="space-between" align="center">
                <Image src="/images/3.png" maxW="48%"></Image>
                <Box pl={{ base: "30px", lg: "100px" }}>
                  <Text
                    fontSize={{ base: "18px", lg: "26px" }}
                    as="b"
                    mb="24px"
                  >
                    SFOOTBALL PLATFORM FOR PLAYER RECRUITMENT
                  </Text>
                  <Box fontSize={{ base: "13px", lg: "18px" }}>
                    <p>
                      • Filter players by their statistics to find the best
                      candidates;
                    </p>
                    <p>• Quick access to review all player actions;</p>
                    <p>
                      • Watch statistical metrics that are linked to the video;
                    </p>
                    <p>
                      • Share any video in two clicks with your team via email.
                    </p>
                  </Box>
                </Box>
              </Flex>
              <Flex justify="space-between" align="center">
                <Box>
                  <Text
                    fontSize={{ base: "18px", lg: "26px" }}
                    as="b"
                    mb="24px"
                  >
                    STATISTICAL REPORTS
                  </Text>
                  <Box fontSize={{ base: "13px", lg: "18px" }}>
                    <p>• Real-time statistical match analysis;</p>
                    <p>• Statistical post-match team and player report;</p>
                    <p>• Team and tournament summary reports;</p>
                    <p>• New advanced metrics developed;</p>
                    <p>• Data quality control.</p>
                  </Box>
                </Box>
                <Image src="/images/4.png" maxW="48%"></Image>
              </Flex>
              <Flex justify="space-between" align="center">
                <Image src="/images/5-1.png" maxW="48%"></Image>
                <Box>
                  <Text
                    fontSize={{ base: "18px", lg: "26px" }}
                    as="b"
                    mb="24px"
                  >
                    PLAYER FITNESS TRACKING REPORTS
                  </Text>
                  <Box fontSize={{ base: "13px", lg: "18px" }}>
                    <p>
                      • Fitness tracking data about your own team as well as the
                      opponents;
                    </p>
                    <p>
                      • Speed and covered distance metrics available for each
                      player;
                    </p>
                    <p>
                      • Player position charts showing the team gaps in offense
                      and defense;
                    </p>
                    <p>• New metrics combining event and fitness data;</p>
                    <p>• Proven data collection methodology.</p>
                  </Box>
                </Box>
              </Flex>
              <Flex justify="space-between" align="center">
                <Box pr="50px">
                  <Text
                    fontSize={{ base: "18px", lg: "26px" }}
                    as="b"
                    mb="24px"
                  >
                    RAW DATA
                  </Text>
                  <Box fontSize={{ base: "13px", lg: "18px" }}>
                    <p>• Over 2500 metrics;</p>
                    <p>• Data available in XML and JSON formats;</p>
                    <p>
                      • Tailor-made assistance and guidance on how to use the
                      data for a website or on social media.
                    </p>
                  </Box>
                </Box>
                <Image src="/images/5-2.png" maxW="48%"></Image>
              </Flex>
            </Flex>
          </Container>
        </Box>
      </Box>
    </Box>
  );
}

export default Main;
