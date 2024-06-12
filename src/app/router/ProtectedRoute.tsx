import { FC, PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { useGetAccountInfo } from "src/entities/accountInfo/useGetAccountInfo";

type Props = PropsWithChildren;

export const ProtectedRoute: FC<Props> = ({ children }) => {
  const { accountInfo, isLoadingAccountInfo, isFetchedAccountInfo } =
    useGetAccountInfo();
  if (isLoadingAccountInfo) {
    return null;
  }
  if (isFetchedAccountInfo && !accountInfo?.user_id) {
    return <Navigate to="/" replace />;
  }

  return children;
};
