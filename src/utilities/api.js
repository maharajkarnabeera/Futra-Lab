// 🌐 api.js - Axios Instance with Interceptor
import axios from "axios";
import useAuthStore from "./authStore";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: { "Content-Type": "application/json" },
  withCredentials: true, // Include cookies with requests
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        await useAuthStore.getState().refreshAuth();
        return api(originalRequest); // Retry request after token refresh
      } catch {
        useAuthStore.getState().clearAuth();
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
