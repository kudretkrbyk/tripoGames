import "./App.css";
import Navbar from "./components/Navbar";
import OyunKeyfi from "./components/OyunKeyfi";
import Cards from "./components/Cards";
import TripoHakkinda from "./components/TripoHakkinda";
import Oyunlarimiz from "./components/Oyunlarimiz";
import EkibimizeKatilin from "./components/EkibimizeKatilin";

function App() {
  return (
    <>
      <div className="relative">
        {" "}
        <Navbar></Navbar>
        <OyunKeyfi></OyunKeyfi>
        <Cards></Cards>
        <TripoHakkinda></TripoHakkinda>
        <Oyunlarimiz></Oyunlarimiz>
        <EkibimizeKatilin></EkibimizeKatilin>
      </div>
    </>
  );
}

export default App;
