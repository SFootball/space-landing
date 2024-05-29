import { RouterProvider } from "react-router-dom";
import { router } from "./app/router/Router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

function App() {
  return (
    <I18nextProvider i18n={i18n} defaultNS={"translation"}>
      <RouterProvider router={router} />
    </I18nextProvider>
  );
}

export default App;
