import { RouterProvider } from "react-router-dom";
import { router } from "./app/router/Router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import "./main.css";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { BackendTokenContext } from "./entities/tonAuth/BackendTokenContext";
import { useState } from "react";

const tonConnectManifest = "tonconnect-manifest.json";
const manifestUrl = `${import.meta.env.VITE_APP_URL}/${tonConnectManifest}`;

function App() {
  const [token, setToken] = useState<string | null>(null);
  return (
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      <BackendTokenContext.Provider value={{ token, setToken }}>
        <I18nextProvider i18n={i18n} defaultNS={"translation"}>
          <RouterProvider router={router} />
        </I18nextProvider>
      </BackendTokenContext.Provider>
    </TonConnectUIProvider>
  );
}

export default App;
