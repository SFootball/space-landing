import { Flex, Box, Image, useMediaQuery } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import MenuForMdScreen from "./MenuForMdScreen";
import MenuForMobScreen from "./MenuForMobScreen";
import { useTonBackendAuth } from "src/features/tonAuth/useTonBackendAuth";
import { TonButton } from "src/features/tonAuth/TonButton";
import style from "./Header.module.css";

const logoSrc = "/images/logos/logo.png";

const Header = () => {
  useTonBackendAuth();
  // for mobile
  const [isMobile] = useMediaQuery("(max-width: 420px)");

  return (
    <Box as="header" bgColor="white">
      <Flex
        maxW="1200px"
        minH="110px"
        w="100%"
        justifyContent={"space-between"}
        alignItems={"center"}
        px="4"
        gap={4}
      >
        <Flex right="100px" top="40px" gap="8px">
          <TonButton />
        </Flex>
        {!isMobile && (
          <Flex h="110px" alignItems="center" justify="space-between">
            <Link className={style.link} to="/">
              <Image src={logoSrc} />
            </Link>
          </Flex>
        )}

        <Flex
          flexGrow={1}
          justify="flex-end"
          // position={"relative"}
          alignItems={"center"}
        >
          <Box display={{ base: "none", md: "block" }}>
            <MenuForMdScreen />
          </Box>

          <Box display={{ base: "block", md: "none" }}>
            <MenuForMobScreen />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
