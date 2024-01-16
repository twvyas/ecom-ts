
import Home from "../pages/Home";
import NetworkError from "../pages/NetworkError";
import { createBrowserRouter } from "react-router-dom";
import MasterLayout from "../pages/MasterLayout";

const routes = [
  {
    path: "/",
    element: <MasterLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        // role: [""],
      },
      {
        path: "/network-error",
        element: <NetworkError />,
        // role: [""],
      },
    ],
  },
];

const router = createBrowserRouter(routes);
export default router;
