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
import History from "./pages/History";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import ProtectedRoute from "./components/ProtectedRoute";
import useAuthStore from "./utilities/authStore";

const App = () => {
  const { refreshAuth } = useAuthStore();
  useEffect(() => {
    const verifyToken = async () => {
      await refreshAuth();
    };
    verifyToken();
  }, [refreshAuth]);

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
            <Route path="/rp" element={<ResetPassword />} />
            <Route path="/predict" element={<Predict />} />

            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/history" element={<History />} />
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
