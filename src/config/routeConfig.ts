import Home from "../Item/Home";
import { createBrowserRouter } from "react-router-dom";
import MasterLayout from "../components/MasterLayout";

// const routes = 

// const router = createBrowserRouter(routes);
// export default router;

export const router = createBrowserRouter([
  {
    path: "/",
    element:  <MasterLayout/>,
    children: [
      {
        path: "/",
        element: <Home />,
        // role: [""],
      },
    ],
  },
]);