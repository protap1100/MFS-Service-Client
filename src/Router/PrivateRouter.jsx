import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import{ UserContext } from "../pages/Provider/UserProvider";
import Loading from "react-loading";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(UserContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center items-center my-40">
        <Loading></Loading>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRouter;
