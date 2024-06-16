import StarIcon from "../assets/star.svg";
import useIntersectionObserver from "../customJs/useIntersectionObserver"; // Hook'u import edin
import { useRef } from "react";
export default function Kipon() {
  const divRef1 = useRef(null);

  const hasIntersected1 = useIntersectionObserver(divRef1, { threshold: 0.1 });
  return (
    <div className="flex flex-col w-full">
      <div className="relative py-10 ">
        <div className=" bg-center bg-cover w-full h-screen bg-[url(https://static.wixstatic.com/media/c837a6_8731dc6786664fda8dca78196a46ad5e~mv2.jpg/v1/fill/w_1521,h_687,al_l,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_8731dc6786664fda8dca78196a46ad5e~mv2.jpg)]   "></div>
        <div
          ref={divRef1}
          className={`absolute top-0 right-1/2 transition-transform duration-700 ${
            hasIntersected1 ? "translate-x-0" : "-translate-x-full"
          } w-1/3 bg-white shadow-xl flex flex-col gap-10 rounded-xl p-10`}
        >
          <div className="flex items-center justify-start gap-2">
            {" "}
            <div className="bg-cover bg-center w-20 h-20 rounded-xl bg-[url(https://static.wixstatic.com/media/c837a6_16a98f508d924e89876cfa965dd448ff~mv2.jpg/v1/crop/x_1815,y_679,w_1361,h_1363/fill/w_119,h_119,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_1811519149.jpg)]  "></div>{" "}
            <div>
              {" "}
              <div>Kipon</div>
              <div>Gündelik-Ücretsiz</div>
            </div>
          </div>
          <div className="text-5xl font-bold">
            Sınırsız Heyecanı Parmak Uçlarınıza Getiren Benzersiz Bir Oyun.
          </div>
          <div>
            Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. Burası, bir
            hikâye anlatmak ve kullanıcılarınıza kendinizi tanıtmak için harika
            bir yer.
          </div>
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
      <div className="flex flex-col w-full p-10 gap-5">
        <div className="font-bold">Ekran Görüntüleri</div>
        <div className="flex items-center justify-center gap-10 ">
          <div className="w-full  group overflow-hidden rounded-3xl ">
            <div className="w-full h-96 rounded-3xl group-hover:scale-110 duration-1000 bg-center  bg-cover bg-[url(https://static.wixstatic.com/media/c837a6_450d2fc8b9f3492296fb8ec2e0a15c44~mv2.jpg/v1/fill/w_1919,h_1080,q_90/c837a6_450d2fc8b9f3492296fb8ec2e0a15c44~mv2.webp)]   "></div>
          </div>
          <div className="w-full group overflow-hidden rounded-3xl ">
            <div className="w-full h-96 rounded-3xl group-hover:scale-110 duration-1000 bg-center bg-cover bg-[url(https://static.wixstatic.com/media/c837a6_7da6f8eb09cd4b969fa78c4b02af3f90~mv2.jpg/v1/fill/w_1905,h_1074,q_90/c837a6_7da6f8eb09cd4b969fa78c4b02af3f90~mv2.jpg)]   "></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full p-10">
        <div className="flex items-center justify-start gap-5 p-5">
          <div className="w-60 h-48 bg-white rounded-xl shadow-xl flex items-center justify-center">
            <div className="bg-red-500 w-48 h-10 rounded-full flex items-center justify-between p-1">
              <img className="w-8 h-8 p-2" src={StarIcon} alt="Icon" />
              <div className=" w-36 h-8 rounded-full bg-white flex items-center justify-center">
                <div>4.1 Puan</div>
              </div>
            </div>
          </div>
          <div>Yorumlar</div>
        </div>
        <div className="flex border border-black w-full h-96">
          <div className="w-1/3 border-r border-black flex flex-col items-start justify-center gap-5 p-10">
            <div>
              “Bu, bir müşteri görüşü. Siz ve hizmetleriniz hakkında olumlu
              şeyler anlatan bir metin ekleyin.”
            </div>
            <div className="font-bold text-xl">Cenk Rua</div>
          </div>
          <div className="w-1/3 border-r border-black flex flex-col items-start justify-center gap-5 p-10">
            <div>
              “Bu, bir müşteri görüşü. Siz ve hizmetleriniz hakkında olumlu
              şeyler anlatan bir metin eklemek için tıklayın. Müşterileriniz
              burada ne kadar iyi olduğunuzu anlatabilir.”
            </div>
            <div className="font-bold text-xl">Emir Akkan</div>
          </div>
          <div className="w-1/3 flex flex-col items-start justify-center gap-5 p-10">
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
        <div className="absolute  flex flex-col items-center justify-center  w-1/2 gap-7  p-10 text-white">
          {" "}
          <div className="text-5xl text-center">
            İster Arkadaşınıza İster Saate Karşı Yarışın, 20 Seviyede Sınırsız
            Eğlencenin Tadına Varın
          </div>
          <div className="text-center">
            Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi
            eklemek ve yazı tipini değiştirmek için “Metni Düzenle” düğmesine
            tıklayın veya buraya çift tıklayın. Burası, bir hikâye anlatmak ve
            kullanıcılarınıza kendinizi tanıtmak için harika bir yer.
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-10 p-5    w-full">
        <div className="bg-white w-1/3 flex flex-col gap-10 items-center justify-center shadow-2xl p-10">
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
