import React from "react";
import PrimaryButton from "../Shared/PrimaryButton";

const Hero = () => {
  return (
    <section id="beranda" className="min-h-screen mt-14">
      <div class="container relative lg:mx-auto px-3.5">
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 bg-[url('/public/assets/bg-hero.jpg')]  bg-cover bg-[center_top_90%] bg-no-repeat" loading="lazy">
          {/* OVERLAY HITAM DENGAN OPACITY */}
          <div className="absolute inset-0 bg-black/45"></div>
        </div>

        <div className="container lg:mx-auto md:pt-14 px-4 py-10 flex flex-col md:flex-row gap-8 z-10 relative box-border">
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <div>
              <h1 className="text-xl md:text-2xl md:pb-7 font-semibold md:tracking-wide font-jost lg:text-5xl lg:py-3.5 lg:px-2.5 text-white lg:mb-6 lg:leading-tight">
                Nikmati Rasa, Jaga Kesehatan - Bersama Deni, <span className="text-primary font-lobster text-2xl">Restoran Favorit Grogol</span>
              </h1>
              <p className="text-lg md:text-xl font-jost text-white lg:text-2xl lg:pr-60 pb-10 md:pb-6">
                Nikmati hidangan premium setiap hari bersama Deni - Restoran, hanya <span className="text-xl md:text-2xl text-primary lg:text-3xl font-lobster">Rp195.000/minggu.</span> Cita rasa eksklusif, layanan istimewa.
              </p>
              {/* Button Section */}
              <div>
                <PrimaryButton />
              </div>
            </div>
          </div>
          {/* Image Content */}
          <div className="w-full lg:w-1/2">
            <div>
              <img src="/public/assets/bg-makanan1.png" alt="Picture Makanan" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
