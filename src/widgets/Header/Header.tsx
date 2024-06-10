import { Flex, Box, Container, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import MenuForMdScreen from "./MenuForMdScreen";
import MenuForMobScreen from "./MenuForMobScreen";
import { useTonBackendAuth } from "src/entities/tonAuth/useTonBackendAuth";
import { TonButton } from "src/entities/tonAuth/TonButton";
import style from "./Header.module.css";

const logoSrc = "/images/logos/logo.png";

const Header = () => {
  useTonBackendAuth();
  // const changeLanguage = (lng: string) => {
  //   i18n.changeLanguage(lng);
  // };

  return (
    <Box as="header" bgColor="white">
      <Container maxW="1200px">
        <Flex position="absolute" right="100px" top="40px" gap="8px">
          <TonButton />
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
      </Container>
    </Box>
  );
};

export default Header;
