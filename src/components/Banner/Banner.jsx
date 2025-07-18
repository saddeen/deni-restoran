import React from "react";
import PrimaryButton from "../Shared/PrimaryButton";

const Banner = () => {
  return (
    <>
      <div className="container py-8 relative lg:mx-auto">
        <h1 className="text-lg md:text-2xl md:px-14 md:font-bold font-jost text-dark font-jost lg:text-3xl lg:py-3.5 lg:px-2.5 text-center px-5">
          <span className="text-primary inline-block font-lobster tracking-wide">Hidangan Eksklusif</span> Ala Deni – Kini Hadir di Grogol, Jakarta Barat
        </h1>
        {/* Content 1 */}
        <div className="container px-4 py-5 flex flex-col md:flex-row md:px-14 items-center justify-center">
          <div className="w-full md:w-1/2 lg:py-10">
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 shadow-lg ring-1 ring-white/30">
              <p className="text-sm md:text-xl lg:pr-16 text-dark font-jost p-2 md:p-1.5">
                Waktu kamu terlalu berharga untuk dihabiskan di dapur. Biar Deni yang masak, kamu tinggal nikmati. Sajian istimewa langsung diantar ke rumahmu di Grogol setiap hari. Harga hemat, rasa mewah — mulai langganan sekarang dan
                rasakan bedanya!
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2"></div>
        </div>
        {/* Content 2 */}
        <div className="container px-4 py-5 flex flex-col md:px-14 items-center md:flex-row-reverse justify-center pb-10 md:pb-16">
          <div className="w-full md:w-1/2 lg:py-10">
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 shadow-lg ring-1 ring-white/30">
              <p className="text-sm md:text-xl lg:pr-16 text-dark font-jost p-2 md:p-1.5">
                Masakan enak bukan lagi mewah. Deni siap menyajikan kelezatan setiap hari langsung ke rumahmu di Grogol — dari menu khas Nusantara sampai hidangan spesial. Langganan sekarang, rasakan bedanya!
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2"></div>
        </div>
        <div className="flex items-center justify-center">
          <PrimaryButton />
        </div>
        {/* background makanan 1 */}
        <div className="hidden md:block absolute top-2">
          <img src="/public/assets/banner-2.png" alt="" loading="lazy" className="w-[100px] lg:w-[150px]" />
        </div>
        {/* background makanan 2 */}
        <div className="hidden md:block absolute bottom-0">
          <img src="/public/assets/banner-1.png" alt="" loading="lazy" className="w-[100px] lg:w-[150px]" />
        </div>
        {/* background makanan 3 */}
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
          <img src="/public/assets/banner-3.png" alt="" loading="lazy" className="w-[100px] md:w-[400px] lg:w-[300px]" />
        </div>
      </div>
    </>
  );
};

export default Banner;
