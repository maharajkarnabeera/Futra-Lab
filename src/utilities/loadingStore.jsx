import { create } from 'zustand';

const useLoadingStore = create((set) => ({
  isLoading: false,
  showLoader: () => set({ isLoading: true }),
  hideLoader: () => set({ isLoading: false }),
}));

export default useLoadingStore;
