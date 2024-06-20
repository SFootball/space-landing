import { Flex, Heading, Skeleton, Stack, Text } from "@chakra-ui/react";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useGetAccountInfo } from "src/entities/accountInfo/useGetAccountInfo";

export const Component: FC = () => {
  const { t } = useTranslation();
  const { accountInfo, isLoadingAccountInfo } = useGetAccountInfo();

  return (
    <Flex as="main" direction={"column"} px={4}>
      {isLoadingAccountInfo && (
        <Stack>
          <Skeleton height="40px" />
          <Skeleton height="40px" />
          <Skeleton height="40px" />
        </Stack>
      )}
      <Heading>{t("Account info")}</Heading>

      {accountInfo && (
        <Stack>
          <Text>Account address: {accountInfo.ton_wallet_address}</Text>
          <p>Id: {accountInfo.user_id}</p>
        </Stack>
      )}
    </Flex>
  );
};

Component.displayName = "AccountInfo";

export default Component;
