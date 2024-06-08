import { RouterProvider } from "react-router-dom";
import { router } from "./app/router/Router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import "./main.css";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { BackendTokenContext } from "./entities/tonAuth/BackendTokenContext";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const tonConnectManifest = "tonconnect-manifest.json";
const tonConnectDevManifest = "tonconnect-manifest-dev.json";
const manifestUrl = () => {
  const manifest = import.meta.env.DEV
    ? tonConnectDevManifest
    : tonConnectManifest;
  return `${import.meta.env.VITE_APP_URL}/${manifest}`;
};
// const manifestUrl = () =>
//   `${import.meta.env.VITE_APP_URL}/${tonConnectManifest}`;

export const queryClient = new QueryClient();

function App() {
  const [token, setToken] = useState<string | null>(null);
  return (
    <TonConnectUIProvider manifestUrl={manifestUrl()}>
      <BackendTokenContext.Provider value={{ token, setToken }}>
        <I18nextProvider i18n={i18n} defaultNS={"translation"}>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
          </QueryClientProvider>
        </I18nextProvider>
      </BackendTokenContext.Provider>
    </TonConnectUIProvider>
  );
}

export default App;
