import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
// import { createBrowserRouter } from "react-router";
// import RootLayout from "./layout/rootLayout";
// import InstallApps from "./pages/InstallApps/InstallApps";
// import Homepage from "./pages/Homepage/Homepage";
// import Apps from "./pages/Apps/Apps";
// import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { router } from "./Router/Router";
import InstalledAppContext from "./context/InstalledAppContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <InstalledAppContext>
      <RouterProvider router={router} />
    </InstalledAppContext>
  </StrictMode>,
);
