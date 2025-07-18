import React from "react";

const Tentang = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-16" id="tentang">
      <div className="max-w-4xl mx-auto text-center">
        {/* Judul dan Deskripsi */}
        <h2 className="text-2xl md:text-4xl font-bold text-primary mb-6 font-lobster tracking-wide">Tentang Deni - Restoran</h2>
        <p className="text-gray-700 text-lg md:leading-relaxed mb-10 leading-tight">
          Hadirkan kelezatan masakan rumahan premium langsung ke meja makan Anda. Diracik dari bahan pilihan dan disajikan dengan cita rasa otentik, setiap hidangan kami menghadirkan pengalaman kuliner yang istimewa tanpa harus repot
          memasak sendiri.
        </p>
        {/* Gambar */}
        <div className="w-full h-[250px] md:h-[400px] rounded-xl overflow-hidden shadow-lg mb-14">
          <img src="/public/assets/bg-tentang.jpg" alt="Dapur Deni" className="w-full h-full object-cover" loading="lazy" />
        </div>

        {/* Newsletter Form */}
        <div className="bg-primary/5 p-8 rounded-xl shadow-md border border-primary/10 max-w-2xl mx-auto">
          <h3 className="lg:text-3xl md:text-xl font-jost font-semibold text-black mb-2">
            Dapatkan Update Menu & <span className="inline-block text-primary font-lobster">Promo Spesial</span>
          </h3>
          <p className="text-gray-600 mb-4">
            Masukkan email kamu untuk <span className=" font-lobster lg:text-xl text-primary">berlangganan</span> informasi terbaru dari kami.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input type="email" placeholder="Alamat Email" className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" />
            <button type="submit" className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/80 transition-all">
              Langganan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Tentang;
