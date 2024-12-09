import { Suspense, lazy } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

// Bileşenleri lazy ile dinamik olarak import ediyoruz
const Main = lazy(() => import("./pages/Main"));
const Kipon = lazy(() => import("./pages/Kipon"));
const Robotrix = lazy(() => import("./pages/Robotrix"));
const Box = lazy(() => import("./pages/Box"));
const Kariyer = lazy(() => import("./pages/Kariyer"));
const Hakkinda = lazy(() => import("./pages/Hakkinda"));

function App() {
  return (
    <ParallaxProvider>
      <Router>
        <div className="relative">
          <Navbar />
          {/* Suspense ile yedek bir yükleme durumu ekliyoruz */}
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/kipon" element={<Kipon />} />
              <Route path="/robotrix" element={<Robotrix />} />
              <Route path="/treasure-box" element={<Box />} />
              <Route path="/kariyer" element={<Kariyer />} />
              <Route path="/hakkinda" element={<Hakkinda />} />

              {/* Diğer sayfalar için de benzer şekilde Route ekleyebilirsiniz */}
            </Routes>{" "}
            <Footer />
          </Suspense>
        </div>
      </Router>
    </ParallaxProvider>
  );
}

export default App;
