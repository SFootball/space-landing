import { useQuery } from "@tanstack/react-query";
import { mainApi } from "../../shared/api/api";
import { useIsConnectionRestored, useTonWallet } from "@tonconnect/ui-react";
import { useEffect } from "react";
import { queryClient } from "src/App";

export const useGetAccountInfoQueryKey = ["accountInfo"];

export const useGetAccountInfo = () => {
  const connectionRestored = useIsConnectionRestored();
  const wallet = useTonWallet();

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
      if (wallet) {
        refetch();
      } else {
        queryClient.refetchQueries({
          queryKey: useGetAccountInfoQueryKey,
          exact: true,
        });
      }
    }
  }, [connectionRestored, refetch, wallet]);

  return {
    accountInfo: data,
    isLoadingAccountInfo: isLoading,
    error,
    refetchAccountInfo: refetch,
    isFetchedAccountInfo: isFetched,
  };
};
