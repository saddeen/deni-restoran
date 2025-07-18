import React from "react";
import dataKeunggulan from "./dataKeunggulan";
const MengapaPilihKami = () => {
  return (
    <>
      <div className="py-14 md:py-20" id="keunggulan">
        <div className="container mx-auto">
          {/* Heading Section */}
          <h1 className="text-xl md:text-3xl md:px-20 px-7 tracking-wider md:tracking-widest font-lobster lg:text-3xl text-center font-semibold pb-10 lg:pb-14">
            Keunggulan <span className="text-primary md:text-4xl">Deni – Restoran</span> Langganan Anda
          </h1>
          {/* card section */}
          <div className="flex flex-wrap justify-center gap-6">
            {dataKeunggulan.map((item) => (
              <div key={item.id} className="w-full sm:w-[45%] lg:w-[25%] p-4 bg-white rounded shadow text-center">
                <img src={item.icon} alt={item.judul} className="w-14 h-14 mx-auto mb-4" />
                <h2 className="text-xl font-semibold font-lobster md:text-2xl lg:text-4xl mb-2 tracking-widest">{item.judul}</h2>
                <p className="text-sm font-jost md:text-xl">{item.deskripsi}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MengapaPilihKami;
