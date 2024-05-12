import {
  Flex,
  Box,
  Container,
  Text,
  Input,
  Textarea,
  Button,
  Image,
  Heading,
} from "@chakra-ui/react";

const bgImgURL = "/images/footballer_1.jpg";

function MainPage() {
  return (
    <Box
      bgImage={bgImgURL}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center"
      bgAttachment="fixed"
    >
      <Box as="header" bgColor="white">
        <Container maxW="1200px">
          <Flex h="110px" alignItems="center">
            <Image src="/images/logo.png" maxW="20%"></Image>
          </Flex>
        </Container>
      </Box>
      <Box as="main">
        <Container maxW="1200px">
          <Flex
            h="calc(100vh - 110px)"
            justifyContent="center"
            alignItems="center"
            direction="column"
          >
            <Heading
              fontSize={{ base: "72px", sm: "56px", xl: "72px" }}
              marginBottom="54px"
              fontWeight="bold"
              color="white"
              textAlign="center"
            >
              Professionals rely on numbers!
            </Heading>
            <Box
              color="white"
              fontSize={{ base: "46px", sm: "32px", xl: "46px" }}
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
            py={{ base: "150px", xl: "150px", sm: "75px" }}
          >
            <Text
              fontSize={{ base: "72px", sm: "56px", xl: "72px" }}
              as="b"
              textAlign="center"
              mb="72px"
            >
              Who we are?
            </Text>
            <Text fontSize={{ base: "20px", sm: "14px", xl: "20px" }} mb="54px">
              SpaceFootball is a new digital project dedicated to set up a
              football analytics and video analysis system. The project provides
              a wide range of services covering all possible customer requests,
              including a video platform, statistical post-match reports, live
              breakdown with the minimal delay, raw data, player fitness
              tracking reports, and analytical player reports.
            </Text>
            <Text
              fontSize={{ base: "26px", sm: "18px", xl: "26px" }}
              as="b"
              mb="36px"
            >
              OUR MISSION
            </Text>
            <Text fontSize={{ base: "20px", sm: "14px", xl: "20px" }} mb="54px">
              We aim at developing football with the contemporary IT solutions
              using machine learning, neural networks, customized and
              user-friendly software which will facilitate the work for coaches,
              analysts as well as journalists and commentators. The
              SpaceFootball services are fully customizable, so all the users
              will manage to find what they need.
            </Text>
            <Text
              fontSize={{ base: "26px", sm: "18px", xl: "26px" }}
              as="b"
              mb="36px"
            >
              OUR QUALITY
            </Text>
            <Text fontSize={{ base: "20px", sm: "14px", xl: "20px" }} mb="54px">
              More than 200 experienced ex-InStat employess, own independent
              production department, own methodology of full Live analysis.
            </Text>
            <Text
              fontSize={{ base: "26px", sm: "18px", xl: "26px" }}
              as="b"
              mb="36px"
            >
              RELIABILITY
            </Text>
            <Text fontSize={{ base: "20px", sm: "14px", xl: "20px" }} mb="54px">
              SpaceFootball is a well-structured company with over 20 people in
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
                    fontSize={{ base: "26px", sm: "18px", xl: "26px" }}
                    as="b"
                    mb="24px"
                  >
                    SPACEFOOTBALL SOLUTIONS
                  </Text>
                  <Text
                    mb="36px"
                    fontSize={{ base: "18px", sm: "13px", xl: "18px" }}
                  >
                    <p>• Technical match filming;</p>
                    <p>• Video and advanced statistics;</p>
                    <p>• Detailed post-match reports;</p>
                    <p>• Statistical live data collection;</p>
                    <p>• Player fitness tracking reports;</p>
                    <p>• Raw data delivered in live mode.</p>
                  </Text>
                  <Text fontSize={{ base: "18px", sm: "13px", xl: "18px" }}>
                    Services to be launched in the short term:
                    <p>• 24/7 technical support;</p>
                    <p>• Live fitness tracking;</p>
                    <p>• Analytical opponent’s prescout reports;</p>
                    <p>• Post-match referee reports;</p>
                    <p>• Offline and online tagging software.</p>
                  </Text>
                </Box>
              </Flex>
              <Flex justify="space-between" align="center">
                <Box>
                  <Text
                    fontSize={{ base: "26px", sm: "18px", xl: "26px" }}
                    as="b"
                    mb="24px"
                  >
                    SPACEFOOTBALL PLATFORM FOR COACHES
                  </Text>
                  <Text fontSize={{ base: "18px", sm: "13px", xl: "18px" }}>
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
                  </Text>
                </Box>
                <Image src="/images/2.png" maxW="48%"></Image>
              </Flex>
              <Flex justify="space-between" align="center">
                <Image src="/images/3.png" maxW="48%"></Image>
                <Box pl={{ base: "100px", sm: "30px", xl: "100px" }}>
                  <Text
                    fontSize={{ base: "26px", sm: "18px", xl: "26px" }}
                    as="b"
                    mb="24px"
                  >
                    SPACEFOOTBALL PLATFORM FOR PLAYER RECRUITMENT
                  </Text>
                  <Text fontSize={{ base: "18px", sm: "13px", xl: "18px" }}>
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
                  </Text>
                </Box>
              </Flex>
              <Flex justify="space-between" align="center">
                <Box>
                  <Text
                    fontSize={{ base: "26px", sm: "18px", xl: "26px" }}
                    as="b"
                    mb="24px"
                  >
                    STATISTICAL REPORTS
                  </Text>
                  <Text fontSize={{ base: "18px", sm: "13px", xl: "18px" }}>
                    <p>• Real-time statistical match analysis;</p>
                    <p>• Statistical post-match team and player report;</p>
                    <p>• Team and tournament summary reports;</p>
                    <p>• New advanced metrics developed;</p>
                    <p>• Data quality control.</p>
                  </Text>
                </Box>
                <Image src="/images/4.png" maxW="48%"></Image>
              </Flex>
              <Flex justify="space-between" align="center">
                <Image src="/images/5-1.png" maxW="48%"></Image>
                <Box>
                  <Text
                    fontSize={{ base: "26px", sm: "18px", xl: "26px" }}
                    as="b"
                    mb="24px"
                  >
                    PLAYER FITNESS TRACKING REPORTS
                  </Text>
                  <Text fontSize={{ base: "18px", sm: "13px", xl: "18px" }}>
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
                  </Text>
                </Box>
              </Flex>
              <Flex justify="space-between" align="center">
                <Box pr="50px">
                  <Text
                    fontSize={{ base: "26px", sm: "18px", xl: "26px" }}
                    as="b"
                    mb="24px"
                  >
                    RAW DATA
                  </Text>
                  <Text fontSize={{ base: "18px", sm: "13px", xl: "18px" }}>
                    <p>• Over 2500 metrics;</p>
                    <p>• Data available in XML and JSON formats;</p>
                    <p>
                      • Tailor-made assistance and guidance on how to use the
                      data for a website or on social media.
                    </p>
                  </Text>
                </Box>
                <Image src="/images/5-2.png" maxW="48%"></Image>
              </Flex>
            </Flex>
          </Container>
        </Box>
        <Box bgColor="white">
          <Container
            maxW="1200px"
            maxH="650px"
            pt={{ base: "150px", xl: "150px" }}
          >
            <Flex justify="start" pb="150px">
              <Image
                objectFit="cover"
                transform="scale(1.25)"
                alignSelf="center"
                opacity="0.4"
                mr="8%"
                src="/images/letter_s.png"
                maxW="30%"
                pl="16px"
              ></Image>
              <Box flexBasis="460px">
                <Text
                  fontSize={{ base: "30px", sm: "21px", xl: "30px" }}
                  as="b"
                >
                  Contact us
                </Text>
                <Text
                  fontSize={{ base: "18px", sm: "13px", xl: "18px" }}
                  mb="30px"
                >
                  spacefootball.web3@gmail.com
                </Text>
                <Text
                  fontSize={{ base: "16px", sm: "11px", xl: "16px" }}
                  mb="5px"
                >
                  Your email
                </Text>
                <Input
                  maxW="460px"
                  mb="20px"
                  variant="filled"
                  placeholder="mail@example.com"
                  fontSize={{ base: "16px", sm: "11px", xl: "16px" }}
                />
                <Text
                  fontSize={{ base: "16px", sm: "11px", xl: "16px" }}
                  mb="5px"
                >
                  Your name
                </Text>
                <Input
                  maxW="460px"
                  mb="20px"
                  variant="filled"
                  placeholder="John Smith"
                  fontSize={{ base: "16px", sm: "11px", xl: "16px" }}
                />
                <Text fontSize={{ base: "16px", sm: "11px", xl: "16px" }}>
                  Your message
                </Text>
                <Textarea
                  maxW="460px"
                  variant="filled"
                  placeholder="Write your appeal"
                  fontSize={{ base: "16px", sm: "11px", xl: "16px" }}
                  mb="20px"
                />
                <Button
                  color="white"
                  width="160px"
                  height="50px"
                  background="linear-gradient(0.12031726607834739turn, rgba(0, 0, 0, 1) 1%, rgba(0, 95, 174, 1) 72%);"
                  _hover={{ bgColor: "blue.500", backgroundImage: "none" }}
                  transition="0.3s ease all"
                  borderRadius="16px"
                  fontSize={["sm", "md", "lg", "xl", "2xl"]}
                >
                  Send
                </Button>
              </Box>
            </Flex>
          </Container>
        </Box>
      </Box>
    </Box>
  );
}

export default MainPage;