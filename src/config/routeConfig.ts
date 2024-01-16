import Home from "../Item/Home";
import { createBrowserRouter } from "react-router-dom";
import MasterLayout from "../components/MasterLayout";

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
    ],
  },
];

const router = createBrowserRouter(routes);
export default router;
