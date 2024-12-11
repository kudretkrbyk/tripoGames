import StarIcon from "../assets/star.svg";
import useIntersectionObserver from "../customJs/useIntersectionObserver"; // Hook'u import edin
import { useRef } from "react";
import { Parallax } from "react-scroll-parallax";
export default function Robotrix() {
  const divRef1 = useRef(null);

  const hasIntersected1 = useIntersectionObserver(divRef1, { threshold: 0.1 });
  return (
    <div ref={divRef1} className="flex flex-col w-full py-10">
      <div className="relative py-10 ">
        <Parallax speed={-20}>
          {" "}
          <div className="w-full  h-[800px]  ">
            {" "}
            <div className=" bg-center bg-cover w-full h-[600px] bg-[url(https://static.wixstatic.com/media/c837a6_d618c25190414f7abeae106864d8a84e~mv2.jpg/v1/fill/w_1521,h_687,al_l,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_d618c25190414f7abeae106864d8a84e~mv2.jpg)]   "></div>
          </div>
        </Parallax>

        <div
          ref={divRef1}
          className={`absolute top-0 right-10 md:right-1/2 transition-transform duration-700 ${
            hasIntersected1 ? "translate-x-0" : "-translate-x-full"
          } w-2/3 md:w-1/3 bg-white shadow-xl flex flex-col gap-10 rounded-xl p-3 md:p-10 mt-12 md:mt-5`}
        >
          <div className="flex items-center justify-start gap-2">
            {" "}
            <div className="bg-cover bg-center w-20 h-20 rounded-xl bg-[url(https://static.wixstatic.com/media/c837a6_1aa2b71b79dd4d99aac8c7a98d07c586~mv2.jpg/v1/crop/x_1579,y_198,w_1081,h_1081/fill/w_98,h_98,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_1711821976.jpg)]  "></div>{" "}
            <div className="w-full">
              {" "}
              <div>Kipon</div>
              <div>Gündelik-Ücretsiz</div>
            </div>
          </div>
          <div className="md:text-3xl xl:text-5xl font-bold w-full">
            Sınırsız Heyecanı Parmak Uçlarınıza Getiren Benzersiz Bir Oyun.
          </div>
          <div className="w-full">
            Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. Burası, bir
            hikâye anlatmak ve kullanıcılarınıza kendinizi tanıtmak için harika
            bir yer.
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full p-5 md:p-10 gap-5 ">
        <div className="font-bold">Ekran Görüntüleri</div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 ">
          <div className="w-full  group overflow-hidden rounded-3xl ">
            <div className="w-full h-96 rounded-3xl group-hover:scale-110 duration-1000 bg-center  bg-cover bg-[url(https://static.wixstatic.com/media/c837a6_95068cdc344b47c4a49a628164390317~mv2.jpg/v1/fill/w_1919,h_1080,q_90/c837a6_95068cdc344b47c4a49a628164390317~mv2.jpg)]   "></div>
          </div>
          <div className="w-full group overflow-hidden rounded-3xl ">
            <div className="w-full h-96 rounded-3xl group-hover:scale-110 duration-1000 bg-center bg-cover bg-[url(https://static.wixstatic.com/media/c837a6_01338ce91c6f4716806490b17b01db9a~mv2.jpg/v1/fill/w_1917,h_1080,q_90/c837a6_01338ce91c6f4716806490b17b01db9a~mv2.webp)]   "></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full p-5 md:p-10">
        <div className="flex items-center md:justify-start justify-center gap-5 p-5">
          <div className="w-60 h-20 md:h-48 bg-white rounded-xl shadow-xl flex items-center justify-center ">
            <div className="bg-red-500 w-48 h-10 rounded-full flex items-center justify-between p-1">
              <img className="w-8 h-8 p-2" src={StarIcon} alt="Icon" />
              <div className=" w-36 h-8 rounded-full bg-white flex items-center justify-center ">
                <div>4.1 Puan</div>
              </div>
            </div>
          </div>
          <div>Yorumlar</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3  border border-black w-full ">
          <div className="w-full  border-b md:border-b-0 md:border-r border-black flex flex-col items-start justify-center gap-5 p-10">
            <div>
              “Bu, bir müşteri görüşü. Siz ve hizmetleriniz hakkında olumlu
              şeyler anlatan bir metin ekleyin.”
            </div>
            <div className="font-bold text-xl">Cenk Rua</div>
          </div>
          <div className="w-full  border-b md:border-b-0 md:border-r border-black flex flex-col items-start justify-center gap-5 p-10">
            <div>
              “Bu, bir müşteri görüşü. Siz ve hizmetleriniz hakkında olumlu
              şeyler anlatan bir metin eklemek için tıklayın. Müşterileriniz
              burada ne kadar iyi olduğunuzu anlatabilir.”
            </div>
            <div className="font-bold text-xl">Emir Akkan</div>
          </div>
          <div className="w-full  flex flex-col items-start justify-center gap-5 p-10">
            <div>
              “Bu, bir müşteri görüşü. Siz ve hizmetleriniz hakkında olumlu
              şeyler anlatan bir metin ekleyin.”
            </div>
            <div className="font-bold text-xl">Savaş Günge</div>
          </div>
        </div>
      </div>
      <div className="w-full h-screen relative flex items-center justify-center">
        <div className=" bg-center bg-cover w-full h-screen bg-[url(https://static.wixstatic.com/media/c837a6_cff34240addf4fa4991328bd1d51dde0~mv2.jpg/v1/fill/w_1521,h_735,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_cff34240addf4fa4991328bd1d51dde0~mv2.jpg)]   "></div>
        <div className="bg-red-500 w-full h-screen absolute opacity-55"></div>
        <div className="absolute  flex flex-col items-center justify-center  xl:w-1/2 gap-7  p-10 text-white">
          {" "}
          <div className="text-5xl text-center">
            Açık dünya parmaklarınızın ucunda
          </div>
          <div className="text-center w-full">
            Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi
            eklemek ve yazı tipini değiştirmek için “Metni Düzenle” düğmesine
            tıklayın veya buraya çift tıklayın. Burası, bir hikâye anlatmak ve
            kullanıcılarınıza kendinizi tanıtmak için harika bir yer.
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-10 p-5    w-full ">
        <div className="bg-white w-full md:w-2/3 flex flex-col gap-10 items-center justify-center shadow-2xl p-10">
          <div className="text-5xl font-bold">Hemen Oynayın</div>
          <div className="flex w-full items-center justify-center gap-5">
            {" "}
            <img
              className="w-32 h-10"
              src="https://static.wixstatic.com/media/c837a6_e5a608d569fd4c56bcfedec4a72bfbd9~mv2.png/v1/fill/w_180,h_60,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Apple%20Store.png"
            ></img>
            <img
              className="w-32 h-10"
              src="https://static.wixstatic.com/media/c837a6_382fdb7f2d0548b4abd0c3f53011a351~mv2.png/v1/fill/w_206,h_60,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Google%20Play.png"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
