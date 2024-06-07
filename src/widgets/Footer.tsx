import { Box, Container, Flex, Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaTelegram, FaDiscord } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const logoSrc = "/images/logos/logo.png";

const Footer = () => {
  const { t } = useTranslation();

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
            <Flex direction="column" alignItems={{ base: "center" }} gap="20px">
              <Text
                as="b"
                fontSize={{ base: "16px", lg: "24px" }}
                alignSelf="center"
              >
                {t("Follow us")}
              </Text>
              <Flex
                align="center"
                justify="space-between"
                gap="14px"
                maxWidth={{ base: "240px", lg: "260px" }}
                wrap="wrap"
              >
                <Text fontSize={{ base: "14px", lg: "20px" }}>
                  {t("Telegram bot")}:
                </Text>
                <Link to="https://t.me/space_football_bot">
                  <FaTelegram className="social-icon tg-bot-icon" />
                </Link>
                <Text fontSize={{ base: "14px", lg: "20px" }}>
                  {t("Telegram channel")}:
                </Text>
                <Link to="https://t.me/SFootballEN">
                  <FaTelegram className="social-icon tg-en-icon" />
                </Link>
                <Text fontSize={{ base: "14px", lg: "20px" }}>
                  {t("Telegram ru channel")}:
                </Text>
                <Link to="https://t.me/SFootballSpace">
                  <FaTelegram className="social-icon tg-ru-icon" />
                </Link>
                <Text fontSize={{ base: "14px", lg: "20px" }}>
                  {t("Discord")}:
                </Text>
                <Link to="https://discord.com/invite/MNf6j9Hq">
                  <FaDiscord className="social-icon discord-icon" />
                </Link>
              </Flex>
            </Flex>
          </Flex>
        </Container>
        <Text
          fontSize={{ base: "14px", lg: "16px" }}
          margin="0 auto"
          textAlign="center"
          pb="30px"
        >
          &#169; {t("2024 All Rights Reserved")}
        </Text>
      </Box>
    </>
  );
};

export default Footer;
