import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/Home/HomePage";
import routeList from "./routerList";
import Game from "../pages/Game/Game";
import SignIn from "../authentication/CreateAccount";
import Login from "../authentication/Login";
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
      {
        path: routeList.signIn,
        element: <SignIn />,
      },
      {
        path: routeList.login,
        element: <Login />,
      },
    ],
  },
]);

export default mainRoute;
