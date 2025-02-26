// 📦 authStore.js - Zustand Store
import { create } from "zustand";
import authService from "./authService";

const useAuthStore = create((set, get) => ({
  isAuthenticated: false,
  authLoading: true, // <-- Add loading state
  user: null,
  history: [],

  setAuth: (status, user = null) => set({ isAuthenticated: status, user }),
  setHistory: (history) => set({ history }),
  clearAuth: () =>
    set({
      isAuthenticated: false,
      user: null,
      history: [],
      authLoading: false,
    }),

  refreshAuth: async () => {
    try {
      const response = await authService.refreshToken();
      set({
        isAuthenticated: true,
        user: {
          firstName: response.user.first_name,
          lastName: response.user.last_name,
        },
        authLoading: false, // <-- Done loading
      });
    } catch (err) {
      console.error("Token refresh failed:", err);
      get().clearAuth();
      set({ authLoading: false });
      // <-- Done loading even if error occurs
    }
  },

  fetchHistory: async () => {
    try {
      const response = await authService.getHistory();
      const history = response.predictions;
      set({ history });
    } catch (err) {
      console.error("Fetching history failed:", err);
      set({ history: [] });
    }
  },

  loginUser: async (credentials) => {
    try {
      const response = await authService.login(credentials);
      const user = {
        firstName: response.user.first_name,
        lastName: response.user.last_name,
      };
      set({ isAuthenticated: true, user });
    } catch (err) {
      console.error("Login failed:", err);
      get().clearAuth();
      throw err;
    }
  },

  logoutUser: async () => {
    try {
      await authService.logoutUser();
    } catch (err) {
      console.error("Logout failed:", err);
    } finally {
      get().clearAuth();
    }
  },
}));

export default useAuthStore;
