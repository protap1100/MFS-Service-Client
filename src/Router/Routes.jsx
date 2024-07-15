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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/home",
        index: true,
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
        element: <Transactions></Transactions>,
      },
      {
        path: "/user-dashboard",
        element: <UserDashboard></UserDashboard>,
      },
      {
        path: "/admin-dashboard",
        element: <AdminDashboard></AdminDashboard>,
      },
      {
        path: "/agent-dashboard",
        element: <AgentDashboard></AgentDashboard>,
      },
      {
        path:"/my-profile",
        element : <AboutMe></AboutMe>
      }
    ],
  },
]);
