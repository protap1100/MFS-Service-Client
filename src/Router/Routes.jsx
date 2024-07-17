import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/errorpage/ErrorPage";
import Home from "../pages/home/Home";
import Login from "../pages/authentications/Login";
import Transactions from "../pages/transaction/Transactions";
import Register from "../pages/authentications/Register";
import UserDashboard from "../pages/userDashboard/UserDashboard";
import AdminDashboard from "../pages/adminDashboard/AdminDashboard";
import AgentDashboard from "../pages/agentDashboard/AgentDashboard";
import AboutMe from "../pages/userProfile/AboutMe";
import PrivateRouter from "./PrivateRouter";
import MainHome from "../pages/mainHome/MainHome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
       index: true,
       element : <MainHome></MainHome>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/transaction",
        element: (
          <PrivateRouter>
            <Transactions></Transactions>
          </PrivateRouter>
        ),
      },
      {
        path: "/user-dashboard",
        element: <PrivateRouter><UserDashboard></UserDashboard></PrivateRouter>,
      },
      {
        path: "/admin-dashboard",
        element: <PrivateRouter><AdminDashboard></AdminDashboard></PrivateRouter>,
      },
      {
        path: "/agent-dashboard",
        element: <PrivateRouter><AgentDashboard></AgentDashboard></PrivateRouter>,
      },
      {
        path: "/my-profile",
        element: <PrivateRouter><AboutMe></AboutMe></PrivateRouter>,
      },
    ],
  },
]);
