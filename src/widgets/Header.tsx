import { Flex, Box, Container, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import MenuForMdScreen from "../app/MenuForMdScreen";
import MenuForMobScreen from "../app/MenuForMobScreen";

const Header = () => {
  return (
    <Box as="header" bgColor="white">
      <Container maxW="1200px">
        <Flex h="110px" alignItems="center" justify="space-between">
          <Link className="link" to="/">
            <Image src="/images/logos/logo.png" />
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
