import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API_URL;

export const axiosInstance = axios.create({
  baseURL: apiUrl,
  withCredentials: true,
});

export function setupInterceptors(auth, navigate) {
  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      const originalRequest = error.config;
      if (originalRequest.url.includes("/auth/me")) {
        return Promise.reject(error);
      }

      if (error.response?.status === 401) {
        auth.logout();
        navigate("/login");
      } else if (error.response?.status === 404) {
        navigate("*");
      }
      return Promise.reject(error);
    }
  );
}
