import useIntersectionObserver from "../customJs/useIntersectionObserver"; // Hook'u import edin
import { useRef } from "react";
import { Parallax } from "react-scroll-parallax";
export default function Kariyer() {
  const divRef1 = useRef(null);
  const divRef2 = useRef(null);

  const hasIntersected1 = useIntersectionObserver(divRef1, { threshold: 0.1 });
  const hasIntersected2 = useIntersectionObserver(divRef2, { threshold: 0.9 });
  return (
    <div className="flex flex-col w-full p-5 md:p-10">
      <div
        ref={divRef1}
        className={`transition-transform duration-700 ${
          hasIntersected1 ? "translate-x-0" : "-translate-x-20"
        } w-full lg:w-1/2 p-3 md:p-10 flex flex-col gap-4 text-black b mt-10`}
      >
        <div className="text-xl font-bold text-black">
          Gelin, Oyun Dünyasında Devrim Yaratalım
        </div>
        <div className="text-5xl font-bold  w-full">Ekibimize Katılın</div>
        <div className="text-xl text-center md:text-left">
          Bu, bir paragraf. Kendi metninizi eklemek, özgün içerik girmek ve yazı
          tipinde değişiklik yapmak için “Metni Düzenle“ye tıklamanız ya da
          buraya çift tıklamanız yeterli. Burası bir hikâye anlatmak ve
          kullanıcılarınızın sizi tanımasını sağlamak için harika bir yer.
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full border border-black p-1 md:p-20 xl:p-24 overflow-hidden">
        <div className="z-20 bg-red-500 w-full  flex flex-col items-center p-5 overflow-hidden">
          <div className="font-bold text-4xl text-white">Açık Posizyonlar</div>
          <div className="flex flex-col lg:flex-row items-center w-full justify-center p-10 gap-5 lg:gap-24">
            <div className="flex flex-col items-center justify-center gap-5 ">
              <div className=" overflow-hidden group w-80 lg:w-48 rounded-xl">
                <div className="bg-center bg-cover w-80 lg:w-48 h-60 group-hover:scale-110 duration-1000 rounded-xl bg-[url(https://static.wixstatic.com/media/c837a6_d3dc938f64824d11a95b03666d4dd1b8~mv2.jpg/v1/fill/w_1250,h_1250,q_90/c837a6_d3dc938f64824d11a95b03666d4dd1b8~mv2.webp)]   "></div>
              </div>
              <div className="flex flex-col gap-3 text-white">
                <div className="font-bold text-xl">Topluluk Yöneticisi</div>
                <div>İstanbul</div>
                <div className="w-80 lg:w-48">
                  Bu, bir paragraf. Kendi metninizi eklemek için tıklayın.
                  Burası, bir hikâye anlatmak ve kullanıcılarınıza kendinizi
                  tanıtmak için harika bir yer.
                </div>
              </div>
              <div>
                <button className="bg-[#7668fb] p-2 px-6 rounded-xl text-white w-full">
                  Başvur
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-5 ">
              <div className=" overflow-hidden group w-80 lg:w-48 rounded-xl">
                <div className="bg-center bg-cover w-80 lg:w-48 h-60 group-hover:scale-110 duration-1000 rounded-xl bg-[url(https://static.wixstatic.com/media/c837a6_d3dc938f64824d11a95b03666d4dd1b8~mv2.jpg/v1/fill/w_1250,h_1250,q_90/c837a6_d3dc938f64824d11a95b03666d4dd1b8~mv2.webp)]   "></div>
              </div>
              <div className="flex flex-col gap-3 items-center justify-center text-white">
                <div className="font-bold text-xl">Topluluk Yöneticisi</div>
                <div>İstanbul</div>
                <div className="w-80 lg:w-48">
                  Bu, bir paragraf. Kendi metninizi eklemek için tıklayın.
                  Burası, bir hikâye anlatmak ve kullanıcılarınıza kendinizi
                  tanıtmak için harika bir yer.
                </div>
              </div>
              <div>
                <button className="bg-[#7668fb] p-2 px-6 rounded-xl text-white w-full">
                  Başvur
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-5 ">
              <div className=" overflow-hidden group rounded-xl w-80 lg:w-48">
                <div className="bg-center bg-cover w-80 lg:w-48 h-60 group-hover:scale-110 duration-1000 rounded-xl bg-[url(https://static.wixstatic.com/media/c837a6_d3dc938f64824d11a95b03666d4dd1b8~mv2.jpg/v1/fill/w_1250,h_1250,q_90/c837a6_d3dc938f64824d11a95b03666d4dd1b8~mv2.webp)]   "></div>
              </div>
              <div className="flex flex-col gap-3 text-white">
                <div className="font-bold text-xl">Topluluk Yöneticisi</div>
                <div>İstanbul</div>
                <div className="w-80 lg:w-48">
                  Bu, bir paragraf. Kendi metninizi eklemek için tıklayın.
                  Burası, bir hikâye anlatmak ve kullanıcılarınıza kendinizi
                  tanıtmak için harika bir yer.
                </div>
              </div>
              <div>
                <button className="bg-[#7668fb] p-2 px-6 rounded-xl text-white w-full">
                  Başvur
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-5 ">
              <div className=" overflow-hidden group rounded-xl w-80 lg:w-48">
                <div className="bg-center bg-cover w-80 lg:w-48 h-60 group-hover:scale-110 duration-1000 rounded-xl bg-[url(https://static.wixstatic.com/media/c837a6_d3dc938f64824d11a95b03666d4dd1b8~mv2.jpg/v1/fill/w_1250,h_1250,q_90/c837a6_d3dc938f64824d11a95b03666d4dd1b8~mv2.webp)]   "></div>
              </div>
              <div className="flex flex-col gap-3 text-white">
                <div className="font-bold text-xl">Topluluk Yöneticisi</div>
                <div>İstanbul</div>
                <div className="w-80 lg:w-48">
                  Bu, bir paragraf. Kendi metninizi eklemek için tıklayın.
                  Burası, bir hikâye anlatmak ve kullanıcılarınıza kendinizi
                  tanıtmak için harika bir yer.
                </div>
              </div>
              <div>
                <button className="bg-[#7668fb] p-2 px-6 rounded-xl text-white w-full">
                  Başvur
                </button>
              </div>
            </div>
          </div>
        </div>

        <div ref={divRef2} className=" w-full h-full flex  relative    ">
          <Parallax className="relative w-full h-full " speed={-20}>
            <div className="relative w-full h-full ">
              <div className="w-full h-[600px] md:h-[750px] bg-cover bg-center  bg-[url(https://static.wixstatic.com/media/c837a6_0d97f82987d44ed49ee37d4150d890a5~mv2.jpg/v1/fill/w_1265,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_0d97f82987d44ed49ee37d4150d890a5~mv2.jpg)]">
                {" "}
              </div>

              <div className=" bg-gray-600 w-full h-full absolute top-0 left-0 z-30 opacity-40"></div>
            </div>
          </Parallax>

          <div
            className={` transition-opacity duration-1000 absolute ${
              hasIntersected2 ? "opacity-100" : "opacity-0"
            }  z-30 flex flex-col items-start md:items-center  justify-center w-full h-full p-10 gap-10 text-white`}
          >
            <div className="text-3xl">Aradığınız Pozisyonu Bulamadınız mı?</div>
            <div className="text-5xl font-bold">CV'nizi Gönderin</div>
            <div>
              <button className="bg-yellow-500 p-2 px-10 text-black rounded-xl">
                Şimdi Başvur
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
