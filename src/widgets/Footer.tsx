import {
  // Flex,
  Box,
  Container,
  // Text,
  // Input,
  // Textarea,
  // Button,
  // Image,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <Box bgColor="white">
        <Container
          maxW="1200px"
          maxH="650px"
          pt={{ base: "150px", xl: "150px" }}
        >
          {/* TODO need to change footer layout <Flex justify="start" pb="150px">
            <Image
              objectFit="cover"
              transform="scale(1.25)"
              alignSelf="center"
              opacity="0.4"
              mr="8%"
              src="/images/common/letter_s.png"
              maxW="30%"
              pl="16px"
            />
            <Box flexBasis="460px">
              <Text fontSize={{ base: "21px", sm: "21px", xl: "30px" }} as="b">
                Contact us
              </Text>
              <Text
                fontSize={{ base: "13px", sm: "13px", xl: "18px" }}
                mb="30px"
              >
                spacefootball.web3@gmail.com
              </Text>
              <Text
                fontSize={{ base: "11px", sm: "11px", xl: "16px" }}
                mb="5px"
              >
                Your email
              </Text>
              <Input
                maxW="460px"
                mb="20px"
                variant="filled"
                placeholder="mail@example.com"
                fontSize={{ base: "11px", sm: "11px", xl: "16px" }}
              />
              <Text
                fontSize={{ base: "11px", sm: "11px", xl: "16px" }}
                mb="5px"
              >
                Your name
              </Text>
              <Input
                maxW="460px"
                mb="20px"
                variant="filled"
                placeholder="John Smith"
                fontSize={{ base: "11px", sm: "11px", xl: "16px" }}
              />
              <Text fontSize={{ base: "11px", sm: "11px", xl: "16px" }}>
                Your message
              </Text>
              <Textarea
                maxW="460px"
                variant="filled"
                placeholder="Write your appeal"
                fontSize={{ base: "11px", sm: "11px", xl: "16px" }}
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
          </Flex> */}
        </Container>
      </Box>
    </>
  );
};

export default Footer;
