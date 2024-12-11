import { useRef } from "react";
import useIntersectionObserver from "../customJs/useIntersectionObserver"; // Hook'u import edin

export default function Oyunlarimiz() {
  const divRef1 = useRef(null);
  const divRef2 = useRef(null);

  const hasIntersected1 = useIntersectionObserver(divRef1, { threshold: 0.1 });

  return (
    <div
      ref={divRef1}
      className="bg-gray-200 relative flex flex-col gap-5 md:gap-56 p-10 w-full  bg-cover items-center justify-center  overflow-hidden"
    >
      <div className="h-[600px] md:h-[1400px] left-0 top-48 md:top-10 w-full absolute bg-cover bg-[url(https://static.wixstatic.com/media/c837a6_1cf50738638a41d680ed4dc3db5e5492~mv2.png/v1/fill/w_1265,h_1185,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/c837a6_1cf50738638a41d680ed4dc3db5e5492~mv2.png)]"></div>
      <div className=" w-full flex flex-col items-center justify-center gap-5 z-30">
        <div className="text-4xl font-bold">Oyunlarımız</div>
        <div className="text-center  text-xl w-11/12 md:w-2/5 ">
          Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. Burası, bir
          hikâye anlatmak ve kullanıcılarınıza kendinizi tanıtmak için harika
          bir yer.
        </div>
      </div>
      <div className=" flex flex-col md:flex-row gap-5 md:gap-0 items-center justify-between w-full z-30">
        <div
          ref={divRef1}
          className={`transition-transform duration-700 ${
            hasIntersected1 ? "translate-x-0" : "-translate-x-full"
          } w-96 bg-white shadow-xl flex flex-col gap-10 rounded-xl p-10`}
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
        <div
          ref={divRef1}
          className={`transition-transform duration-700 ${
            hasIntersected1 ? "translate-x-0" : "translate-x-full"
          } w-96  bg-white shadow-xl flex flex-col gap-10 rounded-xl p-10 `}
        >
          <div className="flex items-center justify-start gap-2">
            {" "}
            <div className="bg-cover bg-center w-20 h-20 rounded-xl bg-[url(https://static.wixstatic.com/media/c837a6_1aa2b71b79dd4d99aac8c7a98d07c586~mv2.jpg/v1/crop/x_1579,y_198,w_1081,h_1081/fill/w_119,h_119,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_1711821976.jpg)]  "></div>{" "}
            <div>
              {" "}
              <div>Robotrix</div>
              <div>Gündelik-Ücretsiz</div>
            </div>
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
      <div className="flex flex-col md:flex-row gap-5 md:gap-0 items-center justify-between w-full z-30">
        <div
          ref={divRef2}
          className={`transition-transform duration-700 ${
            hasIntersected1 ? "translate-x-0" : "-translate-x-full"
          } w-96  bg-white shadow-xl flex flex-col gap-10 rounded-xl p-10 `}
        >
          <div className="flex items-center justify-start gap-2">
            {" "}
            <div className="bg-cover bg-center w-20 h-20 rounded-xl bg-[url(https://static.wixstatic.com/media/c837a6_315534a972aa4595923fab16bc937c57~mv2.jpg/v1/crop/x_440,y_610,w_1448,h_1446/fill/w_119,h_119,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_1015612369.jpg)]  "></div>{" "}
            <div>
              {" "}
              <div>Robotrix</div>
              <div>Gündelik-Ücretsiz</div>
            </div>
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
        <div ref={divRef2}>
          <img
            className={`w-[275px] h-[300px] transition-transform duration-1000 ${
              hasIntersected1 ? "translate-x-0" : "translate-x-full "
            }`}
            src="https://static.wixstatic.com/media/c837a6_28e8e9cabb13444a8a1840cbf7c4fa07~mv2.png/v1/fill/w_411,h_450,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/shutterstock_1580821522.png"
          ></img>
        </div>
      </div>
    </div>
  );
}
