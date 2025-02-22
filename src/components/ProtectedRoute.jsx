// 🛡️ ProtectedRoute.js - Secure Routes Component
import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuthStore from "../utilities/authStore";

const ProtectedRoute = () => {
  const { isAuthenticated, refreshAuth, fetchHistory } = useAuthStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        await refreshAuth();
        await fetchHistory();
      } catch (err) {
        console.error("Authorization failed:", err);
      } finally {
        setLoading(false);
      }
    };

    verifyAuth();
  }, [refreshAuth, fetchHistory]);

  if (loading) return <p>Loading...</p>;
  if (!isAuthenticated) return <Navigate to="/signin" replace />;

  return <Outlet />;
};

export default ProtectedRoute;
