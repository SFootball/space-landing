import { RouterProvider } from "react-router-dom";
import { router } from "./app/router/Router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import "./main.css";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const tonConnectManifest = "tonconnect-manifest.json";

const manifestUrl = `${import.meta.env.VITE_APP_URL}/${tonConnectManifest}`;

export const queryClient = new QueryClient();

function App() {
  return (
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      <I18nextProvider i18n={i18n} defaultNS={"translation"}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </I18nextProvider>
    </TonConnectUIProvider>
  );
}

export default App;
