import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import RootLayout from "./layout/rootLayout";
import InstallApps from "./pages/InstallApps/InstallApps";
import Homepage from "./pages/Homepage/Homepage";
import Apps from "./pages/Apps/Apps";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        // path: "/",
        index: true,
        element: <Homepage />,
      },
      {
        path: "/apps",
        element: <Apps />,
      },
      {
        path: "/installapps",
        element: <InstallApps />,
      },
    ],
    errorElement: <h2>404 Not Found</h2>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
