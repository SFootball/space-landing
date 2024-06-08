import { useEffect, useRef } from "react";
import { ConnectedWallet, useTonConnectUI } from "@tonconnect/ui-react";

import { errorAlert } from "src/shared/components/Alerts/ErrorAlert";
import { useTranslation } from "react-i18next";
import { useTonproofGenPayload } from "src/shared/hooks/useTonproofGenPayload";
import { useTonproofCheckPayload } from "./useTonproofCheckPayload";
import useInterval from "src/shared/hooks/useInterval";
import { tonproofPayloadTTLMS } from "src/shared/constants/intervals";
import { getAuthTokenFromLS } from "src/shared/utils/localStorage";

let isCheckingProof = false;

export function useTonBackendAuth() {
  const { t } = useTranslation();

  const [tonConnectUI] = useTonConnectUI();
  const firstProofLoading = useRef<boolean>(true);

  const { queryPayload } = useTonproofGenPayload();

  const { checkTonproof } = useTonproofCheckPayload();

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

  useInterval(recreateProofPayload, tonproofPayloadTTLMS, true);

  // check proof in your backend
  useEffect(() => {
    tonConnectUI.onStatusChange(
      async (connectedWallet: ConnectedWallet | null) => {
        try {
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
          }

          if (!token) {
            tonConnectUI.disconnect();
            return;
          }
        } catch (error) {
          tonConnectUI.disconnect();
          errorAlert({
            message:
              (error as Error)?.message ||
              t("Something went wrong by checking proof"),
          });
        }
      }
    );
  }, [tonConnectUI]);
}
