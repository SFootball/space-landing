import { Flex, Box, Image, useMediaQuery, Container } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import MenuForMdScreen from "./MenuForMdScreen";
import MenuForMobScreen from "./MenuForMobScreen";
import { useTonBackendAuth } from "src/features/tonAuth/useTonBackendAuth";
import { TonButton } from "src/features/tonAuth/TonButton";
import style from "./Header.module.css";
import i18n from "src/i18n";

const logoSrc = "/images/logos/logo.png";

const Header = () => {
  useTonBackendAuth();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  // for mobile
  const [isMobile] = useMediaQuery("(max-width: 420px)");

  return (
    <>
      <Box position="fixed" top="calc(100vh - 60px)" right="10px">
        <TonButton />
      </Box>
      <Box as="header" bgColor="white">
        <Container maxW="1200px" position="relative" minH="110px">
          {!isMobile ? (
            <>
              <Flex position="absolute" right="100px" top="40px" gap="8px">
                <Image
                  onClick={() => {
                    changeLanguage("ru");
                  }}
                  src="/images/common/ru.png"
                  h="30px"
                  w="30px"
                  cursor="pointer"
                />
                <Image
                  onClick={() => {
                    changeLanguage("en");
                  }}
                  src="/images/common/en.png"
                  h="30px"
                  w="30px"
                  cursor="pointer"
                />
              </Flex>
              <Flex h="110px" alignItems="center" justify="space-between">
                <Link className={style.link} to="/">
                  <Image src={logoSrc} />
                </Link>

                <Box display={{ base: "none", md: "block" }}>
                  <MenuForMdScreen />
                </Box>
                <Box display={{ base: "block", md: "none" }}>
                  <MenuForMobScreen />
                </Box>
              </Flex>
            </>
          ) : (
            <Flex
              h="110px"
              alignItems="center"
              justify="space-between"
              flexDirection="row-reverse"
            >
              <Box display={{ base: "none", md: "block" }}>
                <MenuForMdScreen />
              </Box>
              <Box display={{ base: "block", md: "none" }}>
                <MenuForMobScreen />
              </Box>
            </Flex>
          )}
        </Container>
      </Box>
    </>
  );
};

export default Header;
