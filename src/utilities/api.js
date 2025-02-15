import axios from "axios";
import useAuthStore from "../hooks/useAuthStore";

// Create Axios instance
const api = axios.create({
  baseURL: "https://your-api-base-url.com", // Replace with your API's base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach token to headers in all requests
api.interceptors.request.use(
  (config) => {
    const { token } = useAuthStore.getState(); // Access token from Zustand
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Handle token expiration and automatic refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Check if error is due to an expired token and retry the request
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Prevent infinite retry loops
      try {
        const refreshAuth = useAuthStore.getState().refreshAuth; // Refresh token
        await refreshAuth();
        const { token } = useAuthStore.getState(); // Get new token
        if (token) {
          originalRequest.headers.Authorization = `Bearer ${token}`;
          return api(originalRequest); // Retry the original request
        }
      } catch (refreshError) {
        console.error("Token refresh failed:", refreshError);
        const clearAuth = useAuthStore.getState().clearAuth;
        clearAuth(); // Clear auth state if refresh fails
      }
    }

    return Promise.reject(error);
  }
);

export default api;
