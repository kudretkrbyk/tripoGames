import useIntersectionObserver from "../customJs/useIntersectionObserver"; // Hook'u import edin
import { useRef } from "react";
import { Parallax } from "react-scroll-parallax";
export default function Hakkinda() {
  const divRef1 = useRef(null);

  const divRef3 = useRef(null);
  const divRef4 = useRef(null);
  const divRef5 = useRef(null);

  const hasIntersected1 = useIntersectionObserver(divRef1, { threshold: 0.1 });

  const hasIntersected3 = useIntersectionObserver(divRef3, { threshold: 0.9 });
  const hasIntersected4 = useIntersectionObserver(divRef4, { threshold: 0.9 });
  const hasIntersected5 = useIntersectionObserver(divRef5, { threshold: 0.9 });
  return (
    <div className="flex flex-col w-full h-full py-10">
      <div
        ref={divRef1}
        className={`transition-transform duration-700 ${
          hasIntersected1 ? "translate-x-0" : "-translate-x-20"
        } flex flex-col gap-5 p-10 w-full md:w-1/2`}
      >
        <div className="text-xl font-bold">Biz Tripo'yuz</div>
        <div className="text-5xl font-bold text-wrap">
          İnteraktif eğlencenin en iyi örneklerini vererek oyun anlayışını
          kökten değiştiriyoruz.
        </div>
      </div>
      <div className="z-30 flex flex-col lg:flex-row items-center justify-center w-full p-10">
        <div className=" bg-center bg-cover w-full lg:w-2/5  h-[900px] bg-[url(https://static.wixstatic.com/media/c837a6_7d351363fc2d4e1da3f6971e3951b8ea~mv2.jpg/v1/fill/w_730,h_590,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_7d351363fc2d4e1da3f6971e3951b8ea~mv2.jpg)]   "></div>

        <div
          ref={divRef1}
          className=" bg-red-500 w-full flex lg:w-3/5  h-[900px] text-white  "
        >
          <div
            className={`transition-transform duration-1000 ${
              hasIntersected1 ? "translate-x-0" : " -translate-x-20 "
            }  flex flex-col gap-1 items-center justify-center w-full  p-12`}
          >
            {" "}
            <div className=" p-1 md:p-10   w-full">
              Bu, bir paragraf. Kendi metninizi eklemek için tıklayın.
              İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni
              Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın
              istediğiniz bir yerine sürükleyip bırakabilirsiniz.
            </div>
            <div className="p-1  md:p-10   ">
              Burası, bir hikâye anlatmak ve kullanıcılarınıza kendinizi
              tanıtmak için harika bir yer. ​Burası, şirketiniz ve hizmetleriniz
              hakkında uzun bir metin yazmak için harika bir yer. Bu alanı,
              şirketiniz ile ilgili daha ayrıntılı bilgi vermek için
              kullanabilirsiniz. Ekibinizden ve sunduğunuz hizmetlerden söz
              edin. Ziyaretçilerinize bu işi kurma fikrinin nasıl doğduğunu ve
              sizi rakiplerinizden ayıran özelliklerin neler olduğunu anlatın.
              Şirketinizin öne çıkmasını sağlayın ve ziyaretçilerinize kendinizi
              gösterin.
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full flex items-center justify-center p-10 relative overflow-hidden">
        <div ref={divRef3} className="z-10 w-full absolute top-0">
          <Parallax speed={-20}>
            {" "}
            <div className="z-20 absolute bg-center bg-cover w-full h-[600px] bg-[url(https://static.wixstatic.com/media/c837a6_95872ebd9e144f399cf045b105f9802b~mv2.jpg/v1/fill/w_1521,h_860,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_95872ebd9e144f399cf045b105f9802b~mv2.jpg)]   "></div>
            <div className="bg-white opacity-70 z-30 absolute w-full h-[600px]"></div>
          </Parallax>
        </div>
        <div
          className={`transition-opacity duration-1000 z-30 w-full md:w-3/6 flex flex-col gap-10 items-center justify-center overflow-hidden`}
        >
          {" "}
          <div className=" text-4xl font-bold">Bizi Biz Yapanlar</div>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full">
            {" "}
            <div
              className={`transition-transform duration-700 ${
                hasIntersected3 ? "translate-x-0" : "-translate-x-20"
              } bg-white rounded-2xl shadow-2xl flex flex-col w-full p-10 gap-5`}
            >
              <div className="z-30 text-red-500 text-3xl font-bold">Başarı</div>
              <div>
                Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. Burası,
                bir hikâye anlatmak ve kullanıcılarınıza kendinizi tanıtmak için
                harika bir yer.
              </div>
            </div>
            <div
              className={`transition-transform duration-700 z-30 ${
                hasIntersected3 ? "translate-x-0" : "-translate-x-20"
              } bg-white rounded-2xl shadow-2xl flex flex-col w-full  p-10 gap-5`}
            >
              <div className="text-red-500 text-3xl font-bold">Yaratıcılık</div>
              <div>
                Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. Burası,
                bir hikâye anlatmak ve kullanıcılarınıza kendinizi tanıtmak için
                harika bir yer.
              </div>
            </div>
          </div>
          <div
            className={`transition-transform duration-700 ${
              hasIntersected3 ? "translate-x-0" : "-translate-x-20"
            } flex flex-col gap-5 p-10 bg-white rounded-2xl shadow-2xl`}
          >
            <div className="text-red-500 text-3xl font-bold">Topluluk</div>
            <div>
              Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. Burası,
              bir hikâye anlatmak ve kullanıcılarınıza kendinizi tanıtmak için
              harika bir yer.
            </div>
          </div>
        </div>{" "}
      </div>
      <div className="w-full h-full z-30 p-3 md:p-10  ">
        <div
          ref={divRef4}
          className="bg-[#272443] w-full h-[1800px] xl:h-[600px] flex flex-col items-center justify-center"
        >
          {" "}
          <div className=" text-white text-4xl md:text-5xl xl:text-6xl font-bold w-full   text-center p-5 ">
            Kurucularımız
          </div>
          <div
            className={` transition-transform duration-1000 ${
              hasIntersected4 ? "translate-y-0" : "translate-y-36"
            }  flex flex-col lg:flex-row items-center justify-center gap-2 md:gap-10 w-full p-10 h-full -mt-48 md:-mt-0 `}
          >
            <div className="flex flex-col items-center justify-center gap-1 md:gap-3 w-full text-white">
              {" "}
              <div className=" w-full h-80    group  overflow-hidden rounded-xl">
                <div className="bg-center bg-cover w-full h-80 rounded-xl hover:scale-110 duration-1000 bg-[url(https://static.wixstatic.com/media/c837a6_b037837537d748ae8f29d375c11cc7c1~mv2.jpg/v1/fill/w_972,h_1292,fp_0.5_0.46,q_90/c837a6_b037837537d748ae8f29d375c11cc7c1~mv2.jpg)]   "></div>
              </div>{" "}
              <div>Damla Sönmez</div>
              <div className="text-nowrap">Teknolojiden Sorumlu Başkan</div>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 w-full text-white">
              {" "}
              <div className=" w-full h-80    group  overflow-hidden rounded-xl">
                <div className="bg-center bg-cover w-full h-80 rounded-xl hover:scale-110 duration-1000 bg-[url(https://static.wixstatic.com/media/c837a6_a879b65578d44053a49978975bc03c78~mv2.jpg/v1/fill/w_972,h_1292,fp_0.47_0.38,q_90/c837a6_a879b65578d44053a49978975bc03c78~mv2.webp)]   "></div>
              </div>{" "}
              <div>Bahadır Can</div>
              <div className="text-nowrap">Teknolojiden Sorumlu Başkan</div>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 w-full text-white">
              {" "}
              <div className=" w-full h-80    group  overflow-hidden rounded-xl">
                <div className="bg-center bg-cover w-full h-80 rounded-xl hover:scale-110 duration-1000 bg-[url(https://static.wixstatic.com/media/c837a6_698f5b147b464ade9a05a8bded6799c7~mv2.jpg/v1/fill/w_1215,h_1615,q_90/c837a6_698f5b147b464ade9a05a8bded6799c7~mv2.webp)]   "></div>
              </div>{" "}
              <div>Tan Sert</div>
              <div className="text-nowrap">Teknolojiden Sorumlu Başkan</div>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 w-full text-white">
              {" "}
              <div className=" w-full h-80    group  overflow-hidden rounded-xl">
                <div className="bg-center bg-cover w-full h-80 rounded-xl hover:scale-110 duration-1000 bg-[url(https://static.wixstatic.com/media/c837a6_a9344c3157b04a70bcf20a9b0ad4e463~mv2.jpg/v1/fill/w_1210,h_1615,q_90/c837a6_a9344c3157b04a70bcf20a9b0ad4e463~mv2.webp)]   "></div>
              </div>{" "}
              <div>Burak Yılmaz</div>
              <div className="text-nowrap">Teknolojiden Sorumlu Başkan</div>
            </div>
          </div>
        </div>{" "}
      </div>
      <div className="w-full p-3 md:p-10 -mt-[250px] xl:-mt-60 h-full">
        <div className=" relative flex items-center justify-between w-full h-[800px] border border-black">
          <div className="w-full absolute h-[1000px] ">
            {" "}
            <Parallax speed={-15}>
              {" "}
              <div className="absolute bg-cover bg-center w-full h-[700px] bg-[url(https://static.wixstatic.com/media/c837a6_1339587ce8bc4864b69df4490dc2de16~mv2.jpg/v1/fill/w_1521,h_802,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_1339587ce8bc4864b69df4490dc2de16~mv2.jpg)]"></div>
              <div
                ref={divRef5}
                className="z-10 bg-red-500 w-full h-[700px] absolute opacity-40  "
              ></div>{" "}
            </Parallax>
          </div>

          <div className="w-full flex flex-col gap-20 md:gap-16 xl:gap-10 -mb-[250px] md:-mb-28 lg:flex-row  items-center justify-between p-3 lg:p-36 ">
            {" "}
            <div
              className={` transition-transform duration-1000 ${
                hasIntersected5 ? "translate-x-0" : "-translate-x-0"
              } text-white z-20 xl:p-10 w-full lg:w-1/2 `}
            >
              {" "}
              <div className="text-xl font-bold">Ofislerimiz</div>
              <div>İstanbul Stüdyomuz</div>
              <div>
                Bu, bir paragraf. Kendi metninizi eklemek için tıklayın.
                İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni
                Düzenle” düğmesine tıklayın veya buraya çift tıklayın. Burası,
                bir hikâye anlatmak ve kullanıcılarınıza kendinizi tanıtmak için
                harika bir yer.
              </div>
            </div>{" "}
            <div
              className={` transition-transform duration-1000 ${
                hasIntersected5 ? "translate-x-0" : "-translate-x-0"
              } bg-white w-full  z-20 flex flex-col items-start justify-around gap-4 p-5 border border-black rounded-2xl shadow-2xl`}
            >
              <div className="-mt-24 bg-cover bg-center w-64 h-40  bg-[url(https://static.wixstatic.com/media/c837a6_bccaaf1515c64510884e82e1f8cc3618~mv2.png/v1/fill/w_315,h_199,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/shutterstock_1763379488.png)]   "></div>
              <div>Sizinle Çalışmak İstiyoruz</div>
              <div>
                Bu, bir paragraf. Kendi metninizi eklemek ve düzenlemek için
                tıklayın. Kullanıcılara kendinizi tanıtın.
              </div>
              <div>
                <button className="bg-[#272443] p-2 px-5 rounded-xl hover:bg-red-500 duration-700">
                  {" "}
                  Fırsatları Keşfet
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
