import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/rootLayout";
import Homepage from "../pages/Homepage/Homepage";
import Apps from "../pages/Apps/Apps";
import InstallApps from "../pages/InstallApps/InstallApps";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import AppDetails from "../pages/AppDetails/AppDetails";
import Dashboard from "../pages/Dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        // path: "/",
        index: true,
        element: <Homepage />,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/apps",
        element: <Apps />,
      },
      {
        path: "/installapps",
        element: <InstallApps />,
      },
      {
        path: "/apps/:id",
        element: <AppDetails />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);
