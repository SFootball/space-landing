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

export function useBackendAuth() {
  const { setToken } = useBackendToken();
  const isConnectionRestored = useIsConnectionRestored();
  const wallet = useTonWallet();
  const [tonConnectUI] = useTonConnectUI();
  const interval = useRef<ReturnType<typeof setInterval> | undefined>();

  useEffect(() => {
    if (!isConnectionRestored || !setToken) {
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
        if (!value) {
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
  }, [wallet, isConnectionRestored, setToken]);
}
