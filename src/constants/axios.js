import axios from "axios";
import { notyfInstance } from "./notyfConfig";

const env = import.meta.env.VITE_ENV;
const apiUrl = env === "prod" ? import.meta.env.VITE_BACK_PROD_URL : import.meta.env.VITE_BACK_DEV_URL;

export const axiosInstance = axios.create({
  baseURL: apiUrl,
  withCredentials: true,
});

let interceptorsAlreadySet = false;

export function setupInterceptors(auth, navigate) {
  if (interceptorsAlreadySet) return;

  interceptorsAlreadySet = true;

  axiosInstance.interceptors.response.use(
    (response) => {
      if (response.data?.message) {
        notyfInstance.success(response.data.message);
      }
      return response;
    },
    (error) => {
      if (error.response?.status === 404) {
        navigate("*");
        return Promise.reject(error);
      } else if (error.response?.status === 401) {
        auth.logout();
        return Promise.reject(error);
      }

      const message = error.response?.data?.message || "Wystąpił błąd";
      notyfInstance.error(message);
    }
  );
}
