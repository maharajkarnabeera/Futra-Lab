import api from "./api";

const authService = {
  login: async (credentials) => {
    const response = await api.post("/auth/login", credentials, {
      withCredentials: true,
    });
    return response.data;
  },

  verifyOtp: async (data) => {
    const response = await api.post("/auth/verify-otp", data, {
      withCredentials: true,
    });
    return response.data;
  },

  refreshToken: async () => {
    const response = await api.get("/auth/refresh-token", {
      withCredentials: true,
    });
    return response.data;
  },

  logout: async () => {
    await api.post("/auth/logout", {}, { withCredentials: true });
  },
};

export default authService;
