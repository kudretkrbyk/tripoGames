import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Kipon from "./pages/Kipon";
import Robotrix from "./pages/Robotrix";
import Box from "./pages/Box";
import Kariyer from "./pages/Kariyer";
import Hakkinda from "./pages/Hakkinda";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <ParallaxProvider>
      <Router>
        <div className="relative">
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/kipon" element={<Kipon />} />
            <Route path="/robotrix" element={<Robotrix />} />
            <Route path="/treasure-box" element={<Box />} />
            <Route path="/kariyer" element={<Kariyer />} />
            <Route path="/Hakkinda" element={<Hakkinda />} />

            {/* Diğer sayfalar için de benzer şekilde Route ekleyebilirsiniz */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </ParallaxProvider>
  );
}

export default App;
