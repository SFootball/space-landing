import { Badge, Box, Flex, Image, Text } from "@chakra-ui/react";

type Props = {
  justify: {
    base: string;
    lg: string;
  };
  Q: string;
  badgeColor: string;
};

const Card: React.FC<Props> = ({ justify, Q, badgeColor }) => {
  return (
    <Flex justify={justify} position="relative">
      <Image
        src="/images/common/stage.png"
        width="40px"
        position="absolute"
        left="calc(50% - 19px)"
        top={{ base: "-60px", lg: "calc(50% - 20px)" }}
      />
      <Flex
        w={{ base: "294px", lg: "420px" }}
        h={{ base: "217px", lg: "310" }}
        bgColor="brand.blue"
        borderRadius="25px"
        shadow="2xl"
        justify="center"
        align="end"
        pb={{ base: "14px", lg: "20px" }}
        position="relative"
      >
        <Text
          position="absolute"
          left="20px"
          top={{ base: "14px", lg: "12px" }}
          fontSize={{ base: "22px", lg: "32px" }}
          color="white"
        >
          STAGE
        </Text>
        <Badge
          colorScheme={badgeColor}
          fontSize={{ base: "16px", lg: "22px" }}
          position="absolute"
          right="20px"
          top="20px"
          borderRadius="22px"
        >
          {Q}
        </Badge>
        <Box
          w={{ base: "266px", lg: "380px" }}
          h={{ base: "112px", lg: "160px" }}
          bgColor="white"
          borderRadius="14px"
          boxShadow="inner"
          position="relative"
        >
          <Text
            p="8px 12px 12px 12px"
            textAlign="left"
            fontSize={{ base: "14px", lg: "20px" }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae sequi
            debitis modi, eos eum pariatur facilis quod temporibus iusto
            inventore?
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Card;
