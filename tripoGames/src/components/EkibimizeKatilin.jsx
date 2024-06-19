import { Parallax } from "react-scroll-parallax";

export default function EkibimizeKatilin() {
  return (
    <div className="w-full  flex flex-col  relative  ">
      <div className="  w-full  relative overflow-hidden  ">
        <div className="w-full h-[1100px] relative  ">
          <Parallax speed={-20}>
            {" "}
            <div className=" bg-center bg-cover w-full h-[600px] md:h-[800px]  bg-[url(https://static.wixstatic.com/media/c837a6_cbd9440d3fce436c913d12b16be55401~mv2.jpg/v1/fill/w_1265,h_750,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_cbd9440d3fce436c913d12b16be55401~mv2.jpg)]   ">
              {" "}
              <div className="absolute right-1/4 md:right-10   bottom-0 w-60 h-[200px] md:w-[500px] md:h-[400px]  bg-center bg-cover bg-[url(https://static.wixstatic.com/media/c837a6_4577a1db5cfd48e5b5b655294b288c71~mv2.png/v1/fill/w_732,h_621,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/shutterstock_1806326989.png)]   "></div>
            </div>
          </Parallax>
        </div>

        <div className="absolute flex flex-col items-start justify-center w-full gap-10 p-20 top-0">
          <div className="text-xl">Ekimize Katılın</div>
          <div className="text-5xl font-bold w-2/3">
            Oyunu değiştirecek yetenekli ekip arkadaşları arıyoruz.
          </div>
          <div>
            <button className="bg-yellow-500 p-5 rounded-xl">
              Pozisyon Ara
            </button>
          </div>
        </div>
      </div>

      <div className="w-full h-[1100px] -mt-10 ">
        <Parallax speed={-20}>
          {" "}
          <div className="w-full h-[800px] bg-center bg-cover bg-[url(https://static.wixstatic.com/media/c837a6_0d97f82987d44ed49ee37d4150d890a5~mv2.jpg/v1/fill/w_1265,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_0d97f82987d44ed49ee37d4150d890a5~mv2.jpg)]   "></div>
        </Parallax>
      </div>
      <div className="absolute z-30 flex flex-col md:flex-row items-center md:items-end justify-center md:justify-between gap-10 w-full p-10 top-1/3 ">
        {" "}
        <div className="z-30 w-full md:w-3/12  shadow-xl bg-white  rounded-xl   flex flex-col items-center justify-start p-10 gap-10">
          <div className="w-full gap-4 flex flex-col">
            <div className="text-2xl font-bold">Bize Ulaşın</div>
            <div className="text-xl">
              Bu, bir paragraf. Kendi metninizi eklemek için tıklayın.
            </div>
          </div>

          <div className="flex items-start justify-between gap-2 w-full">
            <label className="flex flex-col w-36">
              Adı*
              <input className="border border-red-500 p-3 rounded-2xl focus:outline-none"></input>
            </label>
            <label className="flex flex-col w-36">
              Soy adı*
              <input className="border border-red-500 p-3 rounded-2xl focus:outline-none"></input>
            </label>
          </div>

          <div className=" w-full">
            <label className="flex flex-col w-full">
              E-Posta*{" "}
              <input className="border border-red-500 p-3 rounded-2xl focus:outline-none"></input>{" "}
            </label>
          </div>
          <div className=" w-full">
            <label className="flex flex-col w-full">
              Bize mesaj bırakın...{" "}
              <textarea className="h-32 border border-black p-3 rounded-2xl"></textarea>
            </label>
          </div>
          <div className="w-full">
            <button className="bg-[#272443] hover:bg-[#da392b] p-5  w-full rounded-xl ">
              Gönder
            </button>
          </div>
        </div>
        <div className=" bg-red-500 w-full md:w-3/12 h-60 rounded-xl p-5 flex flex-col gap-10 items-start justify-start">
          <div className="text-white w-full">Bültenimize Abone Olun</div>

          <label className="flex flex-col ">
            E-posta*
            <div className="flex gap-4">
              <input className="p-4 rounded-xl"></input>
              <button className="bg-yellow-500 p-4 rounded-xl px-6">
                Katıl
              </button>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}
