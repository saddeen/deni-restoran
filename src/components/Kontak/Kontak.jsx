import React from "react";

const Kontak = () => {
  return (
    <section id="kontak" className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto p-10 bg-gray-800/70 backdrop-blur-md rounded-xl shadow-2xl">
        <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-center mb-10 font-lobster">Hubungi Kami</h2>
        <form className="space-y-6">
          <input className="input input-bordered w-full bg-gray-700 text-white" placeholder="Nama Lengkap" />
          <input className="input input-bordered w-full bg-gray-700 text-white" placeholder="Email" />
          <textarea className="textarea textarea-bordered w-full bg-gray-700 text-white" placeholder="Pesan" rows="5" />
          <button className="btn btn-primary w-full text-lg">Kirim Sekarang</button>
        </form>
      </div>
    </section>
  );
};

export default Kontak;
