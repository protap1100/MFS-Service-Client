import { NavLink } from "react-router-dom";

const Navbar = () => {
  let userRole = "Admin";

  const routes = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Transaction",
      path: "/transaction",
    },
    {
      name: "Login",
      path: "/login",
    },
    {
      name: "Register",
      path: "/register",
    },
  ];

  if (userRole === "Admin") {
    routes.push({
      name: "Admin Dashboard",
      path: "/admin-dashboard",
    });
  } else if (userRole === "Agent") {
    routes.push({
      name: "Agent Dashboard",
      path: "/agent-dashboard",
    });
  } else if (userRole === "User") {
    routes.push({
      name: "User Dashboard",
      path: "/user-dashboard",
    });
  }

  return (
    <div>
      <nav>
        <ul className="flex gap-5 justify-center items-center mt-5 p-2 bg-green-400">
          {routes.map((r, i) => (
            <NavLink key={i} to={r.path}>
              {({ isActive }) => (
                <li
                  className={
                    isActive
                      ? "bg-blue-500 p-2 rounded text-white"
                      : "p-2 rounded bg-blue-300 text-white hover:bg-blue-700"
                  }
                >
                  {r.name}
                </li>
              )}
            </NavLink>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
