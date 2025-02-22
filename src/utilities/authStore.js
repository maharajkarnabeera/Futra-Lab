// 📦 authStore.js - Zustand Store
import { create } from "zustand";
import authService from "./authService";

const useAuthStore = create((set, get) => ({
  isAuthenticated: false,
  user: null,
  history: [],

  setAuth: (status, user = null) => set({ isAuthenticated: status, user }),
  setHistory: (history) => set({ history }),
  clearAuth: () => set({ isAuthenticated: false, user: null, history: [] }),

  refreshAuth: async () => {
    try {
      await authService.refreshToken();
      const { user } = get();
      set({ isAuthenticated: !!user }); // Maintain authentication if user info exists
    } catch (err) {
      console.error("Token refresh failed:", err);
      get().clearAuth();
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

  logoutUser: () => {
    get().clearAuth(); // Client-side logout only
  },
}));

export default useAuthStore;
