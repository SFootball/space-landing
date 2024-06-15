import { queryClient } from "src/App";
import { useGetAccountInfoQueryKey } from "./useGetAccountInfo";

export const getAccountInfoFromCache = () => {
  const data = queryClient.getQueryData(useGetAccountInfoQueryKey);
  console.log("getAccountInfoFromCache: ", data);
  return data;
};
