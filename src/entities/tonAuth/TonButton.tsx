import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FC } from "react";
import {
  useTonConnectModal,
  useTonConnectUI,
  useTonWallet,
} from "@tonconnect/ui-react";
import { useTranslation } from "react-i18next";

export const TonButton: FC = () => {
  const { t } = useTranslation();

  const [tonConnectUI] = useTonConnectUI();
  const { open } = useTonConnectModal();
  const wallet = useTonWallet();

  const openConnectWalletModal = () => {
    open();
  };

  const disconnectWallet = () => {
    tonConnectUI.disconnect();
  };

  const isWalletExist = wallet && "name" in wallet;

  return (
    <Menu closeOnSelect={false}>
      <MenuButton as={Button} colorScheme="blue">
        {isWalletExist ? wallet.name : t("Login")}
      </MenuButton>
      <MenuList minWidth="240px" color="gray.800">
        {!isWalletExist && (
          <MenuItem value="asc" onClick={openConnectWalletModal}>
            {t("Login via ton wallet")}
          </MenuItem>
        )}
        {isWalletExist && (
          <MenuItem onClick={disconnectWallet}>{t("Disconnect")}</MenuItem>
        )}
      </MenuList>
    </Menu>
  );
};
