import { Flex, Box, Container, Image, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box as="header" bgColor="white">
      <Container maxW="1200px">
        <Flex h="110px" alignItems="center" justify="space-between">
          <Link to="/">
            <Image src="/images/logos/logo.png" maxW="50%" />
          </Link>
          <HStack spacing="16px">
            {/* TODO need to create about page <Link to="/about">About</Link> */}
            {/* TODO need to create roadmap page <Link to="/roadmap">Roadmap</Link> */}
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
