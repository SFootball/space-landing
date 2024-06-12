import { useQuery } from "@tanstack/react-query";
import { mainApi } from "../../shared/api/api";
import { useIsConnectionRestored } from "@tonconnect/ui-react";
import { useEffect } from "react";
import { queryClient } from "src/App";

export const useGetAccountInfoQueryKey = ["accountInfo"];

export const useGetAccountInfo = () => {
  const connectionRestored = useIsConnectionRestored();

  const { data, isLoading, error, refetch, isFetched } = useQuery({
    queryKey: useGetAccountInfoQueryKey,
    queryFn: async () => {
      const resp = await mainApi.authApi.apiAuthTonproofAccauntInfoGet();
      return resp?.data;
    },
    retry: false,
    enabled: false,
  });

  useEffect(() => {
    if (connectionRestored) {
      refetch();
    } else {
      queryClient.resetQueries({
        queryKey: useGetAccountInfoQueryKey,
        exact: true,
      });
    }
  }, [connectionRestored, refetch]);

  return {
    accountInfo: data,
    isLoadingAccountInfo: isLoading,
    error,
    refetchAccountInfo: refetch,
    isFetchedAccountInfo: isFetched,
  };
};
