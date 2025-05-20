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
    axiosInstance
      .get("/auth/me", { withCredentials: true })
      .then((res) => setUser(res.data))
      .catch(() => logout())
      .finally(() => setIsLoading(false));
  }, []);

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    routerNavigate("/");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser, logout }}>
      {isLoading ? (
        <div className="w-full h-full flex justify-center items-center">
          <span className="loading loading-infinity"></span>{" "}
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
