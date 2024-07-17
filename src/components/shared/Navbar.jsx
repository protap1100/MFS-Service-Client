import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../pages/Provider/UserProvider";
import Loading from "react-loading";
import useUser from "../../hooks/useUser";

const Navbar = () => {
  const { user, loading, handleLogout } = useContext(UserContext);

  const {singleUser, loading3, } = useUser();

  if (loading || loading3) {
    return (
      <div>
        <Loading type="spin" color="black"></Loading>
      </div>
    );
  }
  // console.log(user);
  console.log(singleUser);

  return (
    <div>
      <nav>
        <ul className="flex gap-5 lg:flex-row flex-col justify-center items-center mt-5 p-2 bg-green-400">
          <NavLink to="/">
            {({ isActive }) => (
              <li
                className={
                  isActive
                    ? "bg-blue-500 p-2 rounded text-white"
                    : "p-2 rounded bg-blue-300 text-white hover:bg-blue-700"
                }
              >
                Home
              </li>
            )}
          </NavLink>
          {user?.user?.role === "Admin" ? (
            ""
          ) : (
            <NavLink to="/transaction">
              {({ isActive }) => (
                <li
                  className={
                    isActive
                      ? "bg-blue-500 p-2 rounded text-white"
                      : "p-2 rounded bg-blue-300 text-white hover:bg-blue-700"
                  }
                >
                  Transaction
                </li>
              )}
            </NavLink>
          )}
          {user ? (
            ""
          ) : (
            <>
              <NavLink to="/login">
                {({ isActive }) => (
                  <li
                    className={
                      isActive
                        ? "bg-blue-500 p-2 rounded text-white"
                        : "p-2 rounded bg-blue-300 text-white hover:bg-blue-700"
                    }
                  >
                    Login
                  </li>
                )}
              </NavLink>
              <NavLink to="/register">
                {({ isActive }) => (
                  <li
                    className={
                      isActive
                        ? "bg-blue-500 p-2 rounded text-white"
                        : "p-2 rounded bg-blue-300 text-white hover:bg-blue-700"
                    }
                  >
                    Register
                  </li>
                )}
              </NavLink>
            </>
          )}
          <NavLink to="/my-profile">
            {({ isActive }) => (
              <li
                className={
                  isActive
                    ? "bg-blue-500 p-2 rounded text-white"
                    : "p-2 rounded bg-blue-300 text-white hover:bg-blue-700"
                }
              >
                My Profile
              </li>
            )}
          </NavLink>
          {user && user?.user?.role === "Admin" && (
            <NavLink to="/admin-dashboard">
              {({ isActive }) => (
                <li
                  className={
                    isActive
                      ? "bg-blue-500 p-2 rounded text-white"
                      : "p-2 rounded bg-blue-300 text-white hover:bg-blue-700"
                  }
                >
                  Admin Dashboard
                </li>
              )}
            </NavLink>
          )}
          {user && user?.user?.role === "Agent" && (
            <NavLink to="/agent-dashboard">
              {({ isActive }) => (
                <li
                  className={
                    isActive
                      ? "bg-blue-500 p-2 rounded text-white"
                      : "p-2 rounded bg-blue-300 text-white hover:bg-blue-700"
                  }
                >
                  Agent Dashboard
                </li>
              )}
            </NavLink>
          )}
          {user && user?.user?.role === "User" && (
            <NavLink to="/user-dashboard">
              {({ isActive }) => (
                <li
                  className={
                    isActive
                      ? "bg-blue-500 p-2 rounded text-white"
                      : "p-2 rounded bg-blue-300 text-white hover:bg-blue-700"
                  }
                >
                  User Dashboard
                </li>
              )}
            </NavLink>
          )}
          {user ? (
            <li>
              <button
                onClick={handleLogout}
                className="p-2 rounded bg-blue-300 text-white hover:bg-blue-700"
              >
                Logout
              </button>
            </li>
          ) : (
            ""
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
