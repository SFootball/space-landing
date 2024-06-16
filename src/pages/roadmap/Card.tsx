import { Badge, Box, Flex, FlexProps, Image, Text } from "@chakra-ui/react";
import { RoadmapItemType } from "./roadmap.types";
import { useTranslation } from "react-i18next";

type Props = {
  containerProps: FlexProps;
  badgeColor?: string;
} & RoadmapItemType;

const Card: React.FC<Props> = ({
  containerProps,
  badgeColor = "green",
  date,
  description,
}) => {
  const { t, i18n } = useTranslation();
  return (
    <Flex position="relative" {...containerProps}>
      <Image
        src="/images/common/stage.png"
        width="40px"
        position="absolute"
        left="calc(50% - 19px)"
        top={{ base: "-60px", lg: "calc(50% - 20px)" }}
      />
      <Flex
        w={{ base: "294px", lg: "420px" }}
        h={{ base: "auto" }}
        bgColor="brand.blue"
        borderRadius="25px"
        shadow="2xl"
        justify="center"
        direction={"column"}
        align="start"
        py={{ base: "14px", lg: "20px" }}
        px={{ base: 4 }}
        // position="relative"
        gap={{ base: "10" }}
      >
        <Flex
          w="100%"
          // h={{ base: "50px" }} w={{ base: "266px", lg: "380px" }}
          justifyContent={"space-between"}
          alignItems={"center"}
          pr={{ base: 2 }}
        >
          <Text
            // position="absolute"
            // left="20px"
            top={{ base: "14px", lg: "12px" }}
            fontSize={{ base: "22px", lg: "32px" }}
            color="white"
          >
            {t("STAGE")}
          </Text>
          <Badge
            colorScheme={badgeColor}
            fontSize={{ base: "16px", lg: "22px" }}
            // position="absolute"
            // right="20px"
            // top="20px"
            borderRadius="22px"
          >
            {date.toLocaleDateString(i18n.language)}
          </Badge>
        </Flex>
        <Box
          w={{ base: "266px", lg: "380px" }}
          h={{ base: "auto" }}
          bgColor="white"
          borderRadius="14px"
          boxShadow="inner"
          // position="relative"
        >
          <Text
            p="8px 12px 12px 12px"
            textAlign="left"
            fontSize={{ base: "14px", lg: "20px" }}
          >
            {t(description)}
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Card;
