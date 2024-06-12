import { useCallback, useEffect, useRef } from "react";
import {
  ConnectedWallet,
  useIsConnectionRestored,
  useTonConnectUI,
} from "@tonconnect/ui-react";

import { errorAlert } from "src/shared/components/Alerts/ErrorAlert";
import { useTranslation } from "react-i18next";
import { useTonproofGenPayload } from "./useTonproofGenPayload";
import { useTonproofCheckPayload } from "./useTonproofCheckPayload";
import useInterval from "src/shared/hooks/useInterval";
import { tonproofPayloadTTLMS } from "src/shared/constants/intervals";
import {
  getAuthTokenFromLS,
  setAuthTokenToLS,
} from "src/shared/utils/localStorage";
import { mainApi } from "src/shared/api/api";

let isCheckingProof = false;

export function useTonBackendAuth() {
  const { t } = useTranslation();

  const connectionRestored = useIsConnectionRestored();

  const [tonConnectUI] = useTonConnectUI();
  const firstProofLoading = useRef<boolean>(true);

  const { queryPayload } = useTonproofGenPayload();

  const { checkTonproof } = useTonproofCheckPayload();

  const recreateProofPayload = useCallback(async () => {
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
  }, [tonConnectUI, queryPayload]);

  if (firstProofLoading.current) {
    recreateProofPayload();
  }

  useInterval(recreateProofPayload, tonproofPayloadTTLMS);

  const checkProofOnBackend = useCallback(
    async (wallet: ConnectedWallet | null) => {
      try {
        console.log("checkProofOnBackend ", wallet);
        if (!wallet || isCheckingProof) {
          mainApi.resetAuthJwtTocken();
          return;
        }

        let token = getAuthTokenFromLS();
        console.log("wallet.connectItems: ", wallet?.connectItems);
        if (
          wallet?.connectItems?.tonProof &&
          "proof" in wallet.connectItems.tonProof
        ) {
          console.log("onStatusChange", wallet);
          isCheckingProof = true;
          token = await checkTonproof({
            proof: wallet.connectItems.tonProof.proof,
            address: wallet.account.address,
            network: wallet.account.chain,
          });
          isCheckingProof = false;
        }

        if (!token) {
          tonConnectUI.disconnect();
          return;
        }
        setAuthTokenToLS(token);
      } catch (error) {
        // tonConnectUI.disconnect();
        console.error(error);
        errorAlert({
          message:
            (error as Error)?.message ||
            t("Something went wrong by checking proof"),
        });
      }
    },
    [checkTonproof, t, tonConnectUI]
  );

  // check proof in your backend
  useEffect(() => {
    tonConnectUI.onStatusChange(
      async (connectedWallet: ConnectedWallet | null) => {
        checkProofOnBackend(connectedWallet);
      }
    );
    // return unsubscribe;
  }, [tonConnectUI]);

  // check jwt token on connection restored
  useEffect(() => {
    if (connectionRestored) {
      const authToken = getAuthTokenFromLS();
      if (!authToken) {
        tonConnectUI.disconnect();
        return;
      }
    }
  }, [connectionRestored, checkProofOnBackend, tonConnectUI]);
}
