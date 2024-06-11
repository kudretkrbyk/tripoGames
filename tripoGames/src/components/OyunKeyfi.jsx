import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

export default function OyunKeyfi() {
  return (
    <div className="   w-full  ">
      <div className="z-20 absolute left-0 top-0 bg-cover bg-center w-full h-screen bg-[url(https://static.wixstatic.com/media/c837a6_aa803204cef842e0b9ad7d820e64f77c~mv2.jpg/v1/fill/w_1518,h_800,al_b,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_aa803204cef842e0b9ad7d820e64f77c~mv2.jpg)]"></div>
      <div className="z-30  flex flex-col items-start justify-center gap-10 p-10 border border-black">
        {" "}
        <div className="z-30 text-8xl ">Oyun Keyfiniz...</div>
        <div className="z-30">Mobil Oyunda Bir Numara</div>
        <div className="z-30 flex gap-2 items-center justify-start">
          <button className="bg-black z-30  rounded-xl text-white flex items-start justify-center gap-2 p-2">
            <FaApple className="size-9" />
            <div className="flex flex-col items-start justify-center">
              <div className=" text-sm">Downlonad on the </div>
              <div className="font-bold">App Store</div>
            </div>
          </button>
          <button className="bg-black z-30 text-white  rounded-xl flex items-start justify-center gap-2 p-2">
            <FaGooglePlay className="size-9" />
            <div className="flex flex-col items-start justify-center">
              {" "}
              <div className=" text-sm">GET IN ON </div>
              <div className="font-bold">Google Play</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
