import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Kipon from "./pages/Kipon";
import Robotrix from "./pages/Robotrix";
import Box from "./pages/Box";

function App() {
  return (
    <Router>
      <div className="relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/kipon" element={<Kipon />} />
          <Route path="/robotrix" element={<Robotrix />} />
          <Route path="/treasure-box" element={<Box />} />

          {/* Diğer sayfalar için de benzer şekilde Route ekleyebilirsiniz */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
