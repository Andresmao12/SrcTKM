import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Ppal from "../views/Ppal/Ppal";
import Detail from "../views/Details/Detail";
import Error404 from "../views/Error/Error404";

import Profile from '../views/Profile/Profile'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Ppal />,
    errorElement: <Error404 />,
  },
  {
    path: "/detail/:eventId",
    element: <Detail />,
    // children: [
    //   {
    //     path: ":userId"
    //   }
    // ]
  },
  {
    path: "/profile",
    element: <Profile />,
    children: [
      {
        path: "account",
        element: <div>account</div>,
      },
      {
        path: "liked-events",
        element: <div>liked events</div>,
      },
    ],
  },
]);

const MyRoutes = () => <RouterProvider router={router} />;

export default MyRoutes;
