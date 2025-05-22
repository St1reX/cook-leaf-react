import { createContext, useContext, useState, useEffect } from "react";
import { axiosInstance } from "../constants/axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const routerNavigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axiosInstance.get("/auth/me");
        setUser(res.data);
      } catch (error) {
        logout();
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    routerNavigate("/");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser, logout }}>
      {isLoading ? (
        <div className="w-screen h-screen flex justify-center items-center">
          <span className="loading loading-infinity"></span>{" "}
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
