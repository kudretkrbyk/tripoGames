export default function Cards() {
  return (
    <div className="flex items-center justify-center gap-10 z-30 w-full p-5">
      <div className="z-30 relative group flex flex-col items-center p-5 justify-end bg-cover bg-center w-60 h-80 rounded-xl  bg-[url(https://static.wixstatic.com/media/c837a6_d5b3b2009d894fa2932bc20684b2a93d~mv2.jpg/v1/fit/w_960,h_1280,q_90/c837a6_d5b3b2009d894fa2932bc20684b2a93d~mv2.webp)] transition-transform duration-700 ease-in-out hover:scale-110  ">
        <div className="bg-red-700 w-60 h-80 absolute top-0 rounded-xl opacity-30 transition-opacity duration-900 ease-in-out group-hover:opacity-0"></div>
        <div className=" text-white font-bold group-hover:opacity-0 transition-opacity duration-900">
          Robotrix
        </div>
        <div className=" text-white group-hover:opacity-0 transition-opacity duration-900 ">
          RPG-Ücretsiz
        </div>
      </div>
      <div className="z-30 flex flex-col items-center p-5 justify-end bg-cover bg-center w-60  h-80 rounded-xl bg-[url(https://static.wixstatic.com/media/c837a6_bf93fe6ee32a41b2b69211460f928b15~mv2.jpg/v1/fit/w_960,h_1282,q_90/c837a6_bf93fe6ee32a41b2b69211460f928b15~mv2.webp)]   ">
        <div className=" text-white font-bold ">Robotrix</div>
        <div className=" text-white ">RPG-Ücretsiz</div>
      </div>
      <div className="z-30  flex flex-col items-center p-5 justify-end bg-cover bg-center w-60  h-80 rounded-xl bg-[url(https://static.wixstatic.com/media/c837a6_f49b2d5464854cc18b19c7e183d05e2c~mv2.jpg/v1/fit/w_960,h_1280,q_90/c837a6_f49b2d5464854cc18b19c7e183d05e2c~mv2.webp)]   ">
        <div className=" text-white font-bold ">Robotrix</div>
        <div className=" text-white ">RPG-Ücretsiz</div>
      </div>
      <div className="z-30 w-60 h-80 bg-yellow-500 rounded-xl flex items-center justify-center">
        Oyunlarımızı Keşfedin
      </div>
    </div>
  );
}
