import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Predict from "./pages/Predict";
import ErrorPage from "./pages/ErrorPage";
import Features from "./pages/Features";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="about" element={<About />}></Route>
              <Route path="contact" element={<Contact />}></Route>
              <Route path="Features" element={<Features />}></Route>
              <Route path="predict" element={<Predict />}></Route>
              <Route path="*" element={<ErrorPage />}></Route>
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
