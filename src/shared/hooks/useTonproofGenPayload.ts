import { useQuery } from "@tanstack/react-query";
import { authApi } from "../api/api";

export const generatePayloadQueryKey = ["tonproofGenPayload"];

export const useTonproofGenPayload = () => {
  const { data, isFetching, isError, refetch } = useQuery({
    queryKey: generatePayloadQueryKey,
    queryFn: async () => {
      const resp = await authApi.apiAuthTonproofGeneratePayloadPost();
      return resp?.data;
    },
    enabled: false,
  });
  return {
    payload: data?.payload,
    isLoadingGenPayload: isFetching,
    isErrorGenPayload: isError,
    queryPayload: refetch,
  };
};
