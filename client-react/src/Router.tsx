import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AboutPage from "./pages/AboutPage";
import ProfilesPage from "./pages/ProfilesPage";
import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage";
import Login from "./pages/Login";
import SignUpAcc from "./pages/SignUpAcc";
import SignUpDet from "./pages/SignUpDet";
import Register from "./pages/Register";

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
    path: "/signup",
    element: <SignUpAcc />,
    children: [{ path: "/signup/details", element: <SignUpDet /> }],
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
    element: <></>,
  },
]);

export default Router;
