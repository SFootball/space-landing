import { useQuery } from "@tanstack/react-query";
import { mainApi } from "../api/api";

export const generatePayloadQueryKey = ["tonproofGenPayload"];

export const useTonproofGenPayload = () => {
  const { data, isFetching, isError, refetch } = useQuery({
    queryKey: generatePayloadQueryKey,
    queryFn: async () => {
      const resp = await mainApi.authApi.apiAuthTonproofGeneratePayloadPost();
      return resp?.data;
    },
    enabled: false,
    retry: 1,
  });
  return {
    payload: data?.payload,
    isLoadingGenPayload: isFetching,
    isErrorGenPayload: isError,
    queryPayload: refetch,
  };
};
