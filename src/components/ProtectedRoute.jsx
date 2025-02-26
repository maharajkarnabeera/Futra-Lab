// 🛡️ ProtectedRoute.js
import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../utilities/authStore";

const ProtectedRoute = () => {
  const { isAuthenticated, authLoading } = useAuthStore();

  if (authLoading) {
    // Optionally, render a loading spinner or placeholder here
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/signin" />;
};

export default ProtectedRoute;
