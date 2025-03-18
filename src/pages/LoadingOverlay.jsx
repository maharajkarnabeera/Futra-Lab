import useLoadingStore from "../utilities/loadingStore";

const LoadingOverlay = () => {
  const { isLoading } = useLoadingStore();

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-opacity-10 backdrop-blur-sm flex flex-col items-center justify-center z-50">
    <div
      className="h-14 w-14 animate-spin rounded-full border-4 border-t-4"
      style={{
        borderTopColor: "transparent",
        borderRightColor: "#4285F4", // Blue
        borderBottomColor: "#EA4335", // Red
        borderLeftColor: "#FBBC05", // Yellow
        boxShadow: "0 0 10px rgba(0,0,0,0.15)",
      }}
    ></div>
    <p className="text-black mt-4 text-lg font-semibold">Loading...</p>
  </div>
  );
};

export default LoadingOverlay;

