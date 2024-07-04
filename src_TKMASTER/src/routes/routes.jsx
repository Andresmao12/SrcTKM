import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Ppal from "../views/Ppal/Ppal";
import Detail from "../views/Details/Detail";
import Error404 from "../views/Error/Error404";

import Profile from "../views/Profile/Profile";
import Info from "../views/Profile/components/Info/Info";
import LikedEvents from "../views/Profile/components/LikedEvents/LikedEvents";

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
        element: <Info />,
      },
      {
        path: "liked-events",
        element: <LikedEvents />,
      },
    ],
  },
]);

const MyRoutes = () => <RouterProvider router={router} />;

export default MyRoutes;
