import { createContext, useState, useEffect } from "react";
import Swal from "sweetalert2";

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);
    setLoading(false);
  }, []);

  const handleLogout = () => {
    const userInfoExists = localStorage.getItem("userInfo");
    const isLoggedInExists = localStorage.getItem("isLoggedIn");

    localStorage.removeItem("userInfo");
    localStorage.removeItem("isLoggedIn");

    if (userInfoExists && isLoggedInExists) {
      Swal.fire({
        title: "Logout Successful",
        text: "You Have Been Logged Out",
        timer: 2000,
        icon: "success"
      });
      setUser(null);
    }
  };

  const authInfo = {
    user,
    loading,
    handleLogout
  };

  return (
    <UserContext.Provider value={authInfo}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
