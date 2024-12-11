import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

export default function OyunKeyfi() {
  return (
    <div className="z-30   w-full h-screen p-5 md:p-10 xl:p-20  ">
      <div className="z-20 absolute left-0 top-0 bg-cover bg-center w-full h-screen bg-[url(https://static.wixstatic.com/media/c837a6_aa803204cef842e0b9ad7d820e64f77c~mv2.jpg/v1/fill/w_1518,h_800,al_b,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_aa803204cef842e0b9ad7d820e64f77c~mv2.jpg)]"></div>
      <div className="z-30 w-full h-full  flex flex-col items-start justify-center gap-10 border border-black  ">
        {" "}
        <div className="z-30 text-4xl md:text-5xl xl:text-8xl ">
          Oyun Keyfiniz...
        </div>
        <div className="z-30">Mobil Oyunda Bir Numara</div>
        <div className="z-30 flex gap-2 items-center justify-start overflow-hidden">
          <button className="bg-black z-30  rounded-xl text-white flex items-center justify-center gap-2 p-2">
            <FaApple className="size-7 md:size-8 xl:size-9" />
            <div className="flex flex-col items-start justify-center">
              <div className=" text-sm text-nowrap">Downlonad on the </div>
              <div className="font-bold">App Store</div>
            </div>
          </button>
          <button className="bg-black z-30 text-white  rounded-xl flex items-center justify-center gap-2 p-2 ">
            <FaGooglePlay className="size-7 md:size-8 xl:size-9" />
            <div className="flex flex-col items-start justify-center">
              {" "}
              <div className=" text-sm text-nowrap">GET IN ON </div>
              <div className="font-bold text-nowrap">Google Play</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
