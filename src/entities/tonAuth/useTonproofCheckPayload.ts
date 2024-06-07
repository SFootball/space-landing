import { authApi } from "../../shared/api/api";
import { TonproofCheckPayloadBodySchema } from "../../shared/api/swagger";
import { errorAlert } from "../../shared/components/Alerts/ErrorAlert";
import { Error } from "src/shared/types";
import { useState } from "react";

export const useTonproofCheckPayload = () => {
  const [isLoading, setIsLoading] = useState(false);

  const checkTonproof = async (params: TonproofCheckPayloadBodySchema) => {
    if (!params) {
      errorAlert({ message: "no params to get token" });
      return;
    }

    setIsLoading(true);
    try {
      const { data } = await authApi.apiAuthTonproofCheckPayloadPost({
        tonproofCheckPayloadBodySchema: params,
      });
      return data?.token || null;
    } catch (error) {
      errorAlert({ message: (error as Error)?.message });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    checkTonproof,
    isLoadingTonproof: isLoading,
  };
};
