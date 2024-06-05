import { Confirm } from "./AlertRoot";

type Props = {
  title?: string;
  message?: string;
  cancelText?: string;
  okText?: string;
  onOk?: () => void;
  onCancel?: () => void;
};

export const errorAlert = ({
  title = "Error",
  message = "Something went wrong. Please try again later.",
  cancelText = "Cancel",
  okText = "Ok",
  onOk = () => {},
  onCancel = () => {},
}: Props) => {
  return Confirm({
    title: title,
    message: message,
    okText: okText,
    cancelText: cancelText,
    onCancel: onCancel,
    onOk: onOk,
  });
};
