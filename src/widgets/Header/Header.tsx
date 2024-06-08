import { Flex, Box, Container, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import MenuForMdScreen from "./MenuForMdScreen";

import MenuForMobScreen from "./MenuForMobScreen";
import i18n from "../../i18n";
import { useTonBackendAuth } from "src/entities/tonAuth/useTonBackendAuth";
import { TonButton } from "src/entities/tonAuth/TonButton";

const logoSrc = "/images/logos/logo.png";

const Header = () => {
  useTonBackendAuth();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Box as="header" bgColor="white">
      <Container maxW="1200px" position="relative">
        <Flex position="absolute" right="100px" top="40px" gap="8px">
          <TonButton />

          <Image
            onClick={() => {
              changeLanguage("ru");
            }}
            src="/images/common/ru.png"
            h="30px"
            w="30px"
            cursor="pointer"
            ml={4}
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
          <Link className="link" to="/">
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
