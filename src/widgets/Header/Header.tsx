import { Flex, Box, Image, useMediaQuery, Container } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { MenuForMdScreen } from "./MenuForMdScreen";
import { MenuForMobScreen } from "./MenuForMobScreen";
import { useTonBackendAuth } from "src/features/tonAuth/useTonBackendAuth";
import { TonButton } from "src/features/tonAuth/TonButton";
import style from "./Header.module.css";
import i18n from "src/i18n";

const logoURL = "/images/logos/logo.png";
const enURL = "/images/common/en.png";
const ruURL = "/images/common/ru.png";

export const Header = () => {
  useTonBackendAuth();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  // for mobile
  const [isMobile] = useMediaQuery("(max-width: 508px)");

  return !isMobile ? (
    <>
      <Box as="header" bgColor="white">
        <Container maxW="1200px" position="relative" minH="110px">
          <Flex position="absolute" right="100px" top="40px" gap="8px">
            <TonButton />
            <Image
              onClick={() => {
                changeLanguage("ru");
              }}
              src={ruURL}
              h="30px"
              w="30px"
              cursor="pointer"
            />
            <Image
              onClick={() => {
                changeLanguage("en");
              }}
              src={enURL}
              h="30px"
              w="30px"
              cursor="pointer"
            />
          </Flex>
          <Flex h="110px" alignItems="center" justify="space-between">
            <Link className={style.link} to="/">
              <Image src={logoURL} />
            </Link>
            <Box display={{ base: "none", lg: "block" }} height="50px">
              <MenuForMdScreen />
            </Box>
            <Box display={{ base: "block", lg: "none" }} height="50px">
              <MenuForMobScreen />
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  ) : (
    <Box as="header" bgColor="white">
      <Container maxW="1200px" position="relative" minH="110px">
        <Flex h="110px" alignItems="center" justify="space-between">
          <TonButton />
          <Box display={{ base: "none", lg: "block" }} height="50px">
            <MenuForMdScreen />
          </Box>
          <Box display={{ base: "block", lg: "none" }} height="50px">
            <MenuForMobScreen />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
