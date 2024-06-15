export default function Cards() {
  return (
    <div className="flex items-center justify-center gap-10 z-30 w-full p-5">
      <div className="z-30 relative  flex flex-col items-center  justify-end  w-60 h-80 rounded-xl  group overflow-hidden  ">
        <div className="absolute rounded-xl group-hover:scale-110 duration-700 w-60 h-80 bg-cover bg-center bg-[url(https://static.wixstatic.com/media/c837a6_d5b3b2009d894fa2932bc20684b2a93d~mv2.jpg/v1/fit/w_960,h_1280,q_90/c837a6_d5b3b2009d894fa2932bc20684b2a93d~mv2.webp)]"></div>

        <div className="bg-red-700 w-60 h-80 absolute top-0 rounded-xl opacity-30 transition-opacity duration-700 ease-in-out group-hover:opacity-0"></div>

        <div className="z-40 text-white font-bold group-hover:opacity-0 duration-700 p-5">
          Robotrix
        </div>
        <div className="z-40 text-white group-hover:opacity-0  duration-700 p-5">
          RPG-Ücretsiz
        </div>
      </div>
      <div className="z-30 relative flex flex-col items-center  justify-end  w-60  h-80 rounded-xl group overflow-hidden   ">
        <div className="absolute group-hover:scale-110 duration-700 w-60 h-80 rounded-xl bg-cover bg-center bg-[url(https://static.wixstatic.com/media/c837a6_bf93fe6ee32a41b2b69211460f928b15~mv2.jpg/v1/fit/w_960,h_1282,q_90/c837a6_bf93fe6ee32a41b2b69211460f928b15~mv2.webp)]"></div>
        <div className="bg-red-700 w-60 h-80 absolute top-0 rounded-xl opacity-30 transition-opacity duration-700 ease-in-out group-hover:opacity-0"></div>
        <div className="z-40 text-white font-bold p-5 duration-700 group-hover:opacity-0 ">
          Robotrix
        </div>
        <div className="z-40 text-white p-5 duration-700 group-hover:opacity-0">
          RPG-Ücretsiz
        </div>
      </div>
      <div className="z-30 relative  flex flex-col items-center  justify-end  w-60  h-80 rounded-xl group overflow-hidden  ">
        <div className="absolute w-60 h-80 rounded-xl  group-hover:scale-110 duration-700  bg-cover bg-center  bg-[url(https://static.wixstatic.com/media/c837a6_f49b2d5464854cc18b19c7e183d05e2c~mv2.jpg/v1/fit/w_960,h_1280,q_90/c837a6_f49b2d5464854cc18b19c7e183d05e2c~mv2.webp)]"></div>
        <div className="bg-red-700 w-60 h-80 absolute top-0 rounded-xl opacity-30 transition-opacity duration-700 ease-in-out group-hover:opacity-0"></div>
        <div className="z-40 text-white font-bold p-5 duration-700 group-hover:opacity-0">
          Robotrix
        </div>
        <div className="z-40 text-white p-5 duration-700 group-hover:opacity-0">
          RPG-Ücretsiz
        </div>
      </div>
      <div className="z-20 group w-60 h-80 bg-gradient-to-b from-yellow-200 to-orange-500  hover:bg-none duration-700 rounded-xl flex items-center justify-center">
        <div className="z-30 absolute rounded-xl bg-yellow-500 opacity-0 group-hover:opacity-100 w-60 h-80"></div>
        <div className="z-30 group-hover:scale-110 duration-700  ">
          {" "}
          Oyunlarımızı Keşfedin
        </div>
      </div>
    </div>
  );
}
