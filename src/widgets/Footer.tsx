import {
  // Flex,
  Box,
  Container,
  Flex,
  Text,
  // Input,
  // Textarea,
  // Button,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaTelegram, FaDiscord } from "react-icons/fa";

const logoSrc = "/images/logos/logo.png";

const Footer = () => {
  return (
    <>
      <Box bgColor="white">
        <Container
          maxW="1200px"
          minH="440px"
          py={{ base: "100px", xl: "100px" }}
          px={{ base: "60px", xl: "60px" }}
        >
          <Flex
            direction={{ base: "column", xl: "row" }}
            justifyContent="space-between"
            alignItems="center"
          >
            <Link className="logo-footer" to="/">
              <Image src={logoSrc} />
            </Link>
            <Flex
              direction="column"
              alignItems={{ base: "center", lg: "end" }}
              gap="20px"
            >
              <Text as="b" fontSize={{ base: "24px" }} alignSelf="center">
                Follow us
              </Text>
              <Flex
                align="center"
                justify="space-between"
                gap="14px"
                maxWidth="260px"
                wrap="wrap"
              >
                <Text fontSize={{ base: "18px" }}>{"Telegram bot: "}</Text>
                <Link to="https://t.me/space_football_bot">
                  <FaTelegram className="social-icon tg-bot-icon" />
                </Link>
                <Text fontSize={{ base: "18px" }}>{"Telegram channel: "}</Text>
                <Link to="https://t.me/SFootballEN">
                  <FaTelegram className="social-icon tg-en-icon" />
                </Link>
                <Text fontSize={{ base: "18px" }}>
                  {"Telegram ru channel: "}
                </Text>
                <Link to="https://t.me/SFootballSpace">
                  <FaTelegram className="social-icon tg-ru-icon" />
                </Link>
                <Text fontSize={{ base: "18px" }}>{"Discord: "}</Text>
                <Link to="https://discord.com/invite/MNf6j9Hq">
                  <FaDiscord className="social-icon discord-icon" />
                </Link>
              </Flex>
            </Flex>
          </Flex>
        </Container>
        <Text margin="0 auto" textAlign="center" pb="30px">
          &#169; 2024 All Rights Reserved
        </Text>
      </Box>
    </>
  );
};

export default Footer;
