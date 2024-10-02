import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/Home/HomePage";
import routeList from "./routerList";
import Game from "../pages/Game/Game";
const mainRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: routeList.game,
        element: <Game />,
      },
    ],
  },
]);

export default mainRoute;
