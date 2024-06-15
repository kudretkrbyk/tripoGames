import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-10 w-full z-30 ">
      <div className="bg-[#da392b] p-5 rounded-b shadow-xl z-30">
        Tripo Games
      </div>
      <div className="flex items-center justify-center bg-blue-400 shadow-xl rounded-b z-30">
        <Link to="/" className="bg-[#da392b] p-5 rounded-bl">
          Anasayfa
        </Link>
        <div className="hover:bg-[#da392b] p-5 relative group">
          Oyunlar
          <div className="flex flex-col absolute bg-white p-3 rounded-xl shadow-xl top-16 left-0 text-nowrap opacity-0 group-hover:opacity-100 duration-700">
            <Link to="/kipon">Kipon</Link>
            <Link to="/robotrix">Robotrix</Link>
            <Link to="/treasure-box">Treasure Box</Link>
          </div>
        </div>
        <Link to="/kariyer" className="hover:bg-[#da392b] p-5">
          Kariyer
        </Link>
        <Link to="/hakkinda" className="hover:bg-[#da392b] p-5">
          Hakkında
        </Link>
        <Link to="/iletisim" className="hover:bg-[#da392b] p-5">
          İletişim
        </Link>
      </div>
    </div>
  );
}
