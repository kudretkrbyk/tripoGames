export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-10 w-full z-30 ">
      <div className="bg-[#da392b] p-5 rounded-b shadow-xl z-30">
        Tripo Games
      </div>
      <div className="flex  items-center justify-center  bg-blue-400 shadow-xl rounded-b z-30">
        <div className="bg-[#da392b] p-5 rounded-bl">Anasayfa </div>
        <div className=" hover:bg-[#da392b] p-5">Oyunlar</div>
        <div className=" hover:bg-[#da392b] p-5">Kariyer</div>
        <div className=" hover:bg-[#da392b] p-5">Hakkında</div>
        <div className=" hover:bg-[#da392b] p-5">İletişim</div>
      </div>
    </div>
  );
}
