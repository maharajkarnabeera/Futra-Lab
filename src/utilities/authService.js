// 🛡️ authService.js - Authentication Service
import api from "./api";

const authService = {
  login: async (credentials) => {
    const response = await api.post("/login/", credentials);
    return response.data; // Expected response: { user: { ... } }
  },

  register: async (userData) => {
    const response = await api.post("/register/", userData);
    return response.data;
  },

  verifyOtp: async (data) => {
    const response = await api.post("/reset-password/", data);
    return response.data;
  },

  refreshToken: async () => {
    const response = await api.post("/token-refresh/");
    console.log(response);
    return response.data; // Managed via httpOnly cookie; no response body expected
  },

  getHistory: async () => {
    const response = await api.get("/history/");
    console.log(response.data);
    return response.data; // Returns user-specific history
  },

  logoutUser: async () => {
    await api.post("/logout/");
  },
};

export default authService;
