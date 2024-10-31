import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AboutPage from "./pages/AboutPage";
import ProfilesPage from "./pages/ProfilesPage";
import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage";
import Login from "./pages/Login";
import SignUpAcc from "./pages/SignUpAcc";
import Setup from "./pages/Setup";
import Register from "./pages/Register";
import UserDashboard from "./pages/UserDashboard";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/setup",
    element: <Setup />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/profiles",
    element: <ProfilesPage />,
    children: [
      {
        path: "/profiles/:profileId",
        element: <ProfilePage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <UserDashboard />,
  },
]);

export default Router;
