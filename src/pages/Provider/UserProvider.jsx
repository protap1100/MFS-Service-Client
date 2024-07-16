import { createContext, useState, useEffect } from "react";

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(true);
//   console.log(user)

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);
    setLoading(false);
  }, []);

  const handleLogout = () =>{
    localStorage.removeItem("userInfo");
    localStorage.removeItem("isLoggedIn");
  }

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
