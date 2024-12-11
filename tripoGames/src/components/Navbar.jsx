import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function Navbar() {
  const [mobileMenuControl, setMobileMenuControl] = useState(false);
  const [mobileMenuSubMenuControl, setMobileMenuSubMenuControl] =
    useState(false);
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

  const handleMobileMenuControl = () => {
    setMobileMenuControl(!mobileMenuControl);
  };
  const handleMobileMenuSubMenuControl = () => {
    setMobileMenuSubMenuControl(!mobileMenuSubMenuControl);
  };
  return (
    <div
      className={`fixed w-full z-50 transition-transform duration-300 ${
        showNavbar ? "md:translate-y-0" : "md:-translate-y-full"
      }`}
    >
      <div className="hidden md:flex items-center justify-between px-10 w-full z-30 ">
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
            <div className="flex flex-col absolute bg-white  rounded-xl shadow-xl top-16 left-0 text-nowrap opacity-0 group-hover:opacity-100 duration-700 text-black">
              <Link
                to="/kipon"
                className="hover:bg-[#da392b] duration-500 hover:text-white p-2 rounded-t-xl"
              >
                Kipon
              </Link>
              <Link
                to="/robotrix"
                className="hover:bg-[#da392b] duration-500 hover:text-white p-2 "
              >
                Robotrix
              </Link>
              <Link
                to="/treasure-box"
                className="hover:bg-[#da392b] duration-500 hover:text-white p-2 rounded-b-xl"
              >
                Treasure Box
              </Link>
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
      {/*Mobile menu*/}
      <div className=" flex md:hidden items-center justify-between px-10 w-full z-50 overflow-hidden">
        {" "}
        <div className="bg-[#da392b] p-5 rounded-b shadow-xl z-30 text-white font-bold text-xl">
          Tripo Games
        </div>
        <div>
          <GiHamburgerMenu
            className="size-10"
            onClick={handleMobileMenuControl}
          />{" "}
          {mobileMenuControl ? (
            <div className="fixed left-0 top-0 h-screen w-full flex flex-col items-center justify-center bg-white shadow-xl rounded-b z-20 ">
              <div>
                <IoCloseSharp
                  className="size-11 fixed right-8 top-5"
                  onClick={handleMobileMenuControl}
                />
              </div>
              <Link
                to="/"
                className="z-0 bg-[#da392b] p-5 rounded-bl text-white"
              >
                Anasayfa
              </Link>
              <div
                onClick={handleMobileMenuSubMenuControl}
                className="flex items-center justify-center gap-2 hover:bg-[#da392b] duration-500 p-5 hover:text-white relative group"
              >
                Oyunlar
                <div>
                  <FaArrowRightLong
                    className="size-5"
                    onClick={handleMobileMenuSubMenuControl}
                  />
                </div>{" "}
                {mobileMenuSubMenuControl ? (
                  <div className="flex flex-col items-center justify-center gap-2 fixed w-full h-screen bg-white p-3 rounded-xl shadow-xl top-16 left-0 text-nowrap  duration-700 text-black">
                    <div>
                      <FaArrowLeftLong
                        className="size-10"
                        onClick={handleMobileMenuSubMenuControl}
                      />
                    </div>
                    <Link to="/kipon" onClick={handleMobileMenuControl}>
                      Kipon
                    </Link>
                    <Link to="/robotrix" onClick={handleMobileMenuControl}>
                      Robotrix
                    </Link>
                    <Link to="/treasure-box" onClick={handleMobileMenuControl}>
                      Treasure Box
                    </Link>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
              <Link
                to="/kariyer"
                className="hover:bg-[#da392b] duration-500 hover:text-white p-5"
                onClick={handleMobileMenuControl}
              >
                Kariyer
              </Link>
              <Link
                to="/hakkinda"
                className="hover:bg-[#da392b] hover:text-white duration-500 p-5"
                onClick={handleMobileMenuControl}
              >
                Hakkında
              </Link>
              <Link
                to="/iletisim"
                className="hover:bg-[#da392b] duration-500 hover:text-white rounded-br p-5"
                onClick={handleMobileMenuControl}
              >
                İletişim
              </Link>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}
