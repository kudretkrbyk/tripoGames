import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        // downscroll code
        setShowNavbar(false);
      } else {
        // upscroll code
        setShowNavbar(true);
      }
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // For Mobile or negative scrolling
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);
  return (
    <div
      className={`fixed w-full z-30 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between px-10 w-full z-30 ">
        {" "}
        <div className="bg-[#da392b] p-5 rounded-b shadow-xl z-30 text-white font-bold text-xl">
          Tripo Games
        </div>
        <div className="flex items-center justify-center bg-white shadow-xl rounded-b z-30">
          <Link to="/" className="bg-[#da392b] p-5 rounded-bl text-white">
            Anasayfa
          </Link>
          <div className="hover:bg-[#da392b] duration-500 p-5 hover:text-white relative group">
            Oyunlar
            <div className="flex flex-col absolute bg-white p-3 rounded-xl shadow-xl top-16 left-0 text-nowrap opacity-0 group-hover:opacity-100 duration-700 text-black">
              <Link to="/kipon">Kipon</Link>
              <Link to="/robotrix">Robotrix</Link>
              <Link to="/treasure-box">Treasure Box</Link>
            </div>
          </div>
          <Link
            to="/kariyer"
            className="hover:bg-[#da392b] duration-500 hover:text-white p-5"
          >
            Kariyer
          </Link>
          <Link
            to="/hakkinda"
            className="hover:bg-[#da392b] hover:text-white duration-500 p-5"
          >
            Hakkında
          </Link>
          <Link
            to="/"
            className="hover:bg-[#da392b] duration-500 hover:text-white rounded-br p-5"
          >
            İletişim
          </Link>
        </div>
      </div>
    </div>
  );
}
