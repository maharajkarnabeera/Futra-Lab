import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Features from "./pages/Features";
import Predict from "./pages/Predict";
import ErrorPage from "./pages/ErrorPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import ProtectedRoute from "./components/ProtectedRoute";
import useAuthStore from "./utilities/authStore"; // Zustand store for authentication

const App = () => {
  const refreshAuth = useAuthStore((state) => state.refreshAuth); // Zustand function to refresh tokens
  const clearAuth = useAuthStore((state) => state.clearAuth); // Zustand function to clear auth on failure

  useEffect(() => {
    // Refresh the session on app load
    const initializeSession = async () => {
      try {
        await refreshAuth(); // Attempt to refresh tokens
      } catch (error) {
        console.error("Failed to refresh session:", error);
        clearAuth(); // Clear authentication state on failure
      }
    };

    initializeSession();
  }, [refreshAuth, clearAuth]);

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/features" element={<Features />} />

            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/predict" element={<Predict />} />
            </Route>

            {/* Catch-All Error Page */}
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
