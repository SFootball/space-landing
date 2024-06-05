import {
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";
import { FC } from "react";
import { useEffect, useRef } from "react";

import {
  useIsConnectionRestored,
  useTonConnectUI,
  useTonWallet,
} from "@tonconnect/ui-react";
import { useBackendToken } from "./BackendTokenContext";
import { authApi } from "src/shared/api/api";
import { errorAlert } from "src/shared/components/Alerts/ErrorAlert";

const localStorageKey = "my-dapp-auth-token";
const payloadTTLMS = 1000 * 60 * 20;

export const TonButton: FC = () => {
  const { setToken } = useBackendToken();
  const isConnectionRestored = useIsConnectionRestored();
  const wallet = useTonWallet();
  const [tonConnectUI] = useTonConnectUI();
  const interval = useRef<ReturnType<typeof setInterval> | undefined>();

  const connectWallet = () => {
    tonConnectUI.setConnectRequestParameters({ state: "loading" });
  };

  useEffect(
    function checkUserTonAuth() {
      if (!isConnectionRestored) {
        console.log("Connection not restored");
        return;
      }

      clearInterval(interval.current);
      if (!wallet) {
        localStorage.removeItem(localStorageKey);
        setToken(null);

        const refreshPayload = async () => {
          tonConnectUI.setConnectRequestParameters({ state: "loading" });
          const value = await authApi.apiAuthTonproofGeneratePayloadPost();
          if (!value?.data?.payload) {
            tonConnectUI.setConnectRequestParameters(null);
          } else {
            tonConnectUI.setConnectRequestParameters({
              state: "ready",
              value: {
                tonProof: value.data.payload,
              },
            });
          }
        };

        refreshPayload();
        setInterval(refreshPayload, payloadTTLMS);
        return;
      }

      const token = localStorage.getItem(localStorageKey);
      if (token) {
        setToken(token);
        return;
      }

      if (
        wallet.connectItems?.tonProof &&
        !("error" in wallet.connectItems.tonProof)
      ) {
        console.log("check proof");
        authApi.apiAuthTonproofCheckPayloadPost({
          tonproofCheckPayloadBodySchema: {
            // address: wallet.account.address,
            // network: wallet.account.chain,
            proof: wallet.connectItems.tonProof.proof,
          },
        });
        // backendAuth
        //   .checkProof(wallet.connectItems.tonProof.proof, wallet.account)
        //   .then((result) => {
        //     if (result) {
        //       setToken(result);
        //       localStorage.setItem(localStorageKey, result);
        //     } else {
        //       alert("Please try another wallet");
        //       tonConnectUI.disconnect();
        //     }
        //   });
      } else {
        errorAlert({ message: "Please try another wallet" });
        tonConnectUI.disconnect();
      }
    },
    [wallet, isConnectionRestored, setToken]
  );
  // return <Button onClick={connectWallet}>Connect wallet</Button>;
  return (
    <Menu closeOnSelect={false}>
      <MenuButton as={Button} colorScheme="blue">
        {wallet?.account ? "some address" : "Connect"}
      </MenuButton>
      <MenuList minWidth="240px">
        <MenuOptionGroup defaultValue="asc" title="Order" type="radio">
          {!isConnectionRestored && (
            <MenuItemOption value="asc" onClick={connectWallet}>
              {"Connect"}
            </MenuItemOption>
          )}
          {isConnectionRestored && (
            <MenuItemOption value="desc">{"Disconnect"}</MenuItemOption>
          )}
        </MenuOptionGroup>
        <MenuDivider />
        {/* <MenuOptionGroup title='Country' type='checkbox'>
      <MenuItemOption value='email'>Email</MenuItemOption>
      <MenuItemOption value='phone'>Phone</MenuItemOption>
      <MenuItemOption value='country'>Country</MenuItemOption>
    </MenuOptionGroup> */}
      </MenuList>
    </Menu>
  );
};
