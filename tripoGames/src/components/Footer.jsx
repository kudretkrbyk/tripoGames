export default function Footer() {
  return (
    <div className="bg-white z-40 w-full flex flex-col items-center justify-center gap-5">
      <div className="z-40 ">
        <button className="z-40 bg-red-500 p-4 rounded-b">Tripo Games</button>
      </div>
      <div>Müthiş Sürükleyici Bir Oyun Deneyimi</div>
      <div className="border-t border-black w-full"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-start justify-center p-20 w-full">
        <div className="flex flex-col gap-5 items-start justify-center w-full  ">
          <div className="font-bold text-xl">İletişim</div>
          <div className="flex flex-col gap-3">
            <div>bilgi@sitem.com</div>
            <div>
              Tel: (212) 234 56 78 <br /> Büyükdere Cad. No.263 Sarıyer, İst.
              34398
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 items-start justify-center w-full  ">
          <div className="font-bold text-xl">Gezinti</div>
          <div className="flex flex-col gap-3">
            <div>Oyunlar</div>
            <div>Kariyer</div>
            <div>Hakkında</div>
            <div>İletişim</div>
            <div>Gizlilik Politikası</div>
            <div>Şartlar ve Koşullar</div>
            <div>Çere Politikası</div>
          </div>
        </div>
        <div className="flex flex-col gap-5 items-start justify-center w-full  ">
          <div className="font-bold text-xl">Sosyal</div>
          <div className="flex flex-col gap-3">
            <div>Discord</div>
            <div>Twich</div>
            <div>Facebook</div>
            <div>Youtube</div>
            <div>Twitter</div>
            <div>LİnkedIn</div>
          </div>
        </div>
        <div className="flex flex-col gap-5 items-start justify-center w-full  ">
          <div className="font-bold text-xl">Bizi Bulun</div>
          <div className="flex flex-col gap-3">
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
      <div className="border-t border-black w-full"></div>
      <div className="p-5 md:p-10">© 2035, Tripo. Wix.com ile oluşturuldu.</div>
    </div>
  );
}
