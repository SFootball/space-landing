import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  theme,
  ThemeProvider,
  useDisclosure,
} from "@chakra-ui/react";
import { FC, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

let returnResponse: unknown | null = null;

export type RootAlertProps = {
  title: string;
  message: string;
  cancelText?: string;
  okText?: string;
  onOk: () => void;
  onCancel: () => void;
};

const AlertRoot: FC<RootAlertProps> = ({
  title,
  message,
  cancelText,
  okText,
  onOk,
  onCancel,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef(null);
  console.log("returnResponse", returnResponse);
  useEffect(() => {
    onOpen();
  }, [onOpen]);

  const confirm = () => {
    onOk();
    onClose();
  };

  const cancel = () => {
    onCancel();
    onClose();
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <AlertDialog
          motionPreset="slideInBottom"
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isOpen={isOpen}
          isCentered
        >
          <AlertDialogOverlay />

          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {title}
            </AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>{message}</AlertDialogBody>
            <AlertDialogFooter>
              <Button variant="ghost" ref={cancelRef} onClick={cancel}>
                {cancelText ?? "Close"}
              </Button>
              <Button ml={3} onClick={confirm} colorScheme="red">
                {okText ?? "Continue"}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </ThemeProvider>
    </>
  );
};

type CreateProps = RootAlertProps;

// pass in alert type
function create(props: CreateProps) {
  const rootID = "temp";
  let div = document.getElementById(rootID);

  if (!div) {
    div = document.createElement("div");
    div.id = rootID;
    document.body.appendChild(div);
  }

  const root = ReactDOM.createRoot(div);
  root.render(<AlertRoot {...props} />);

  if (div) {
    div.remove();
  }
}

// type ConfirmProps = {
//   title: string;
//   message: string;
//   cancelText?: string;
//   okText?: string;
// };

export function Confirm(props: RootAlertProps) {
  create(props);
  return new Promise((resolve) => {
    returnResponse = resolve;
  });
}
