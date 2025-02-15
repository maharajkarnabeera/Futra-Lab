import { create } from "zustand";
import authService from "../services/authService";

const useAuthStore = create((set) => ({
  user: null,
  token: null,

  setAuth: (user, token) => {
    set({ user, token });
  },
  clearAuth: () => {
    set({ user: null, token: null });
  },
  refreshAuth: async () => {
    try {
      const { token, user } = await authService.refreshToken();
      set({ user, token });
    } catch (error) {
      console.error("Failed to refresh token:", error);
      set({ user: null, token: null });
    }
  },
}));

export default useAuthStore;
