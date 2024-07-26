import { createContext, useContext, useEffect, useState } from "react";
import { account } from "../appwriteConfig"; // Ensure this import points to the correct file

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUserStatus();
  }, []);

  //login user
  const LoginUser = async (userInfo) => {
    setLoading(true);
    try {
      const response = await account.createEmailPasswordSession(
        userInfo.email,
        userInfo.password
      );
      console.log("Session:", response);
      setUser(response); // Set the user state with the response data
    } catch (error) {
      console.error("Login error:", error);
    }
    setLoading(false);
  };

  // logout user from the account
  const logoutUser = () => {
    account.deleteSession("current");
    setUser(null);
  };

  // register user (for the sign up page)
  const registerUser = async (userInfo) => {
    setLoading(true);
    try {
      const response = await account.create(
        userInfo.email,
        userInfo.password,
        userInfo.confirmpassword
      );
      console.log("Registration:", response);
      setUser(response);
    } catch (error) {
      console.error("Registration error:", error);
    }
    setLoading(false);
  };

  const checkUserStatus = async () => {
    try {
      const accountDetails = await account.get();
      setUser(accountDetails);
    } catch (error) {
      console.error("User status error:", error);
    }
    setLoading(false);
  };

  const contextData = {
    user,
    LoginUser,
    logoutUser,
    registerUser,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? <p>Loading...</p> : children}
    </AuthContext.Provider>
  );
};

// Custom Hook
export const useAuth = () => useContext(AuthContext);

export default AuthContext;
