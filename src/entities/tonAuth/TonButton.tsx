import {
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import { useEffect, useRef } from "react";
import {
  ConnectedWallet,
  useTonConnectModal,
  useTonConnectUI,
  useTonWallet,
} from "@tonconnect/ui-react";
import { useBackendToken } from "./BackendTokenContext";
import { authApi } from "src/shared/api/api";
import { errorAlert } from "src/shared/components/Alerts/ErrorAlert";
import { useTonproofGenPayload } from "src/shared/hooks/useTonproofGenPayload";
import { useTonproofCheckPayload } from "./useTonproofCheckPayload";
import { tonproofPayloadTTLMS } from "src/shared/constants/intervals";
import { getAuthTokenFromLS } from "src/shared/utils/localStorage";
import useInterval from "src/shared/hooks/useInterval";

let isCheckingProof = false;

export const TonButton: FC = () => {
  // const [authorized, setAuthorized] = useState(false);
  // const { setToken } = useBackendToken();
  // const isConnectionRestored = useIsConnectionRestored();
  const wallet = useTonWallet();
  const [tonConnectUI] = useTonConnectUI();
  const firstProofLoading = useRef<boolean>(true);
  // const interval = useRef<ReturnType<typeof setInterval> | undefined>();
  const { queryPayload, payload } = useTonproofGenPayload();

  const { state, open, close } = useTonConnectModal();

  const { checkTonproof, isLoadingTonproof } = useTonproofCheckPayload();

  const recreateProofPayload = async () => {
    if (firstProofLoading.current) {
      tonConnectUI.setConnectRequestParameters({ state: "loading" });
      firstProofLoading.current = false;
    }
    const backPayloadData = await queryPayload();
    const payload = backPayloadData?.data?.payload;
    if (payload) {
      tonConnectUI.setConnectRequestParameters({
        state: "ready",
        value: {
          tonProof: payload,
        },
      });
    } else {
      tonConnectUI.setConnectRequestParameters(null);
    }
  };

  // if (firstProofLoading.current) {
  //   console.log("recreateProofPayload ", firstProofLoading.current);
  //   recreateProofPayload();
  // }

  useInterval(recreateProofPayload, tonproofPayloadTTLMS, true);

  // check proof in your backend
  useEffect(() => {
    tonConnectUI.onStatusChange(
      async (connectedWallet: ConnectedWallet | null) => {
        console.log("tonConnectUI.onStatusChange ", connectedWallet);
        if (!connectedWallet || isCheckingProof) {
          // TODO make back reset tonproof api
          // setAuthorized(false);

          return;
        }

        let token = getAuthTokenFromLS();
        if (
          connectedWallet?.connectItems?.tonProof &&
          "proof" in connectedWallet.connectItems.tonProof
        ) {
          console.log("onStatusChange", connectedWallet);
          isCheckingProof = true;
          token = await checkTonproof({
            proof: connectedWallet.connectItems.tonProof.proof,
            address: connectedWallet.account.address,
            network: connectedWallet.account.chain,
          });
          isCheckingProof = false;

          // authApi.apiAuthTonproofCheckPayloadPost({
          //   tonproofCheckPayloadBodySchema: {
          //     proof: wallet.connectItems.tonProof.proof,
          //   },
          // });
          // checkProofInYourBackend(wallet.connectItems.tonProof.proof, wallet.account);
        }

        if (!token) {
          tonConnectUI.disconnect();
          // setAuthorized(false);
          return;
        }
        // setAuthorized(true);
      }
    );
  }, [tonConnectUI]);

  // const connectWallet = async () => {
  //   tonConnectUI.setConnectRequestParameters({
  //     state: "loading",
  //   });
  //   // generate payload from api server
  //   await queryPayload();
  //   if (!payload) {
  //     tonConnectUI.setConnectRequestParameters(null);
  //     errorAlert({ message: "Please try another wallet" });
  //     return;
  //   }
  //   tonConnectUI.setConnectRequestParameters({
  //     state: "ready",
  //     value: {
  //       tonProof: payload,
  //     },
  //   });
  //   tonConnectUI.setConnectRequestParameters({ state: "loading" });
  // };

  const openConnectWalletModal = () => {
    open();
  };

  const disconnectWallet = () => {
    tonConnectUI.disconnect();
  };

  const isWalletExist = wallet && "name" in wallet;

  // return <Button onClick={connectWallet}>Connect wallet</Button>;
  return (
    <Menu closeOnSelect={false}>
      <MenuButton as={Button} colorScheme="blue">
        {isWalletExist ? wallet.name : "Connect"}
      </MenuButton>
      <MenuList minWidth="240px">
        {!isWalletExist && (
          <MenuItem value="asc" onClick={openConnectWalletModal}>
            {"Connect"}
          </MenuItem>
        )}
        {isWalletExist && (
          <MenuItem onClick={disconnectWallet}>{"Disconnect"}</MenuItem>
        )}

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

// useEffect(
//   function checkUserTonAuth() {
//     if (!isConnectionRestored) {
//       console.log("Connection not restored");
//       return;
//     }

//     clearInterval(interval.current);
//     if (!wallet) {
//       localStorage.removeItem(localStorageKey);
//       setToken(null);

//       const refreshPayload = async () => {
//         tonConnectUI.setConnectRequestParameters({ state: "loading" });
//         const value = await authApi.apiAuthTonproofGeneratePayloadPost();
//         if (!value?.data?.payload) {
//           tonConnectUI.setConnectRequestParameters(null);
//         } else {
//           tonConnectUI.setConnectRequestParameters({
//             state: "ready",
//             value: {
//               tonProof: value.data.payload,
//             },
//           });
//         }
//       };

//       refreshPayload();
//       setInterval(refreshPayload, payloadTTLMS);
//       return;
//     }

//     const token = localStorage.getItem(localStorageKey);
//     if (token) {
//       setToken(token);
//       return;
//     }

//     if (
//       wallet.connectItems?.tonProof &&
//       !("error" in wallet.connectItems.tonProof)
//     ) {
//       console.log("check proof");
//       authApi.apiAuthTonproofCheckPayloadPost({
//         tonproofCheckPayloadBodySchema: {
//           // address: wallet.account.address,
//           // network: wallet.account.chain,
//           proof: wallet.connectItems.tonProof.proof,
//         },
//       });
//       // backendAuth
//       //   .checkProof(wallet.connectItems.tonProof.proof, wallet.account)
//       //   .then((result) => {
//       //     if (result) {
//       //       setToken(result);
//       //       localStorage.setItem(localStorageKey, result);
//       //     } else {
//       //       alert("Please try another wallet");
//       //       tonConnectUI.disconnect();
//       //     }
//       //   });
//     } else {
//       errorAlert({ message: "Please try another wallet" });
//       tonConnectUI.disconnect();
//     }
//   },
//   [wallet, isConnectionRestored, setToken]
// );
