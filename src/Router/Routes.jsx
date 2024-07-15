import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/errorpage/ErrorPage";
import Home from "../pages/home/Home";
import Login from "../pages/authentications/Login";
import Transactions from "../pages/transaction/Transactions";
import Register from "../pages/authentications/Register";

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
    ],
  },
]);
