import { create } from "zustand";

const usePredictionStore = create((set) => ({
  prediction: {
    "gaCo2": 0,
    "gaTotalEnergyRate": 0,
    "gaNOx": 0,
    "gaPM2.5BrakeWear": 0,
    "gaPM2.5TireWear": 0,
  },

  setPrediction: (newData) =>
    set((state) => ({
      prediction: { ...state.prediction, ...newData },
    })),

  resetPrediction: () =>
    set({
      prediction: {
        "gaCo2": 0,
        "gaTotalEnergyRate": 0,
        "gaNOx": 0,
        "gaPM2.5BrakeWear": 0,
        "gaPM2.5TireWear": 0,
      },
    }),
}));

export default usePredictionStore;
