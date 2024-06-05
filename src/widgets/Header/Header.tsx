import { Flex, Box, Container, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import MenuForMdScreen from "./MenuForMdScreen";
import MenuForMobScreen from "./MenuForMobScreen";
// import { useBackendAuth } from "src/entities/tonAuth/useTonAuth";
import { TonButton } from "../../entities/tonAuth/TonButton";

const logoSrc = "/images/logos/logo.png";

const Header = () => {
  // useBackendAuth();
  return (
    <Box as="header" bgColor="white">
      <Container maxW="1200px">
        <Flex h="110px" alignItems="center" justify="space-between">
          <Link className="link" to="/">
            <Image src={logoSrc} />
          </Link>
          <Flex w="160px" zIndex={2}>
            <TonButton />
          </Flex>
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
