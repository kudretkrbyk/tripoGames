export default function TripoHakkinda() {
  return (
    <div className="flex flex-col w-full  items-center justify-center gap-10 p-10 text-center border border-black">
      <div className="w-1/2 text-xl font-bold">Tripo Hakkında</div>
      <div className="w-1/2 text-5xl font-bold">
        Bir Numaralı Mobil Eğlence Kaynağınız
      </div>
      <div className="w-1/2 text-xl">
        Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi
        eklemek ve yazı tipini değiştirmek için “Metni Düzenle” düğmesine
        tıklayın veya buraya çift tıklayın. Burası, bir hikâye anlatmak ve
        kullanıcılarınıza kendinizi tanıtmak için harika bir yer.
      </div>
      <div className="w-1/2">
        <button className="bg-[#da392b] p-5 rounded-xl hover:border border-black hover:bg-white">
          {" "}
          Daha Fazla Bilgi
        </button>
      </div>
      <div className="relative">
        <img
          className="w-[700px] h-[400px] rounded-xl "
          src="https://static.wixstatic.com/media/c837a6_6f124abbb84f4fceb066cb0cd5eb9e51~mv2.jpg/v1/crop/x_546,y_100,w_2248,h_1281/fill/w_1049,h_597,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/shutterstock_1535881442_edited.jpg"
        ></img>
        <img
          className="absolute -left-16 bottom-0 w-60 h-60"
          src="https://static.wixstatic.com/media/c837a6_0253876c52cc473e888d7842bc048c43~mv2.png/v1/fill/w_342,h_369,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/shutterstock_1768049210.png"
        ></img>
      </div>
    </div>
  );
}
