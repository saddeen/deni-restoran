import React from "react";

const Popup = ({ showPopup, handlePopup }) => {
  return (
    showPopup && (
      <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg w-[320px] p-6 animate-fade-in transition-all duration-300">
          {/* Header */}
          <div className="text-center mb-5">
            <h2 className="text-2xl font-bold text-gray-800">Masuk ke Akun</h2>
            <p className="text-sm text-gray-500">Silakan login untuk melanjutkan</p>
          </div>

          {/* Form */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" placeholder="email@example.com" className="input input-bordered w-full" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Kata Sandi</label>
              <input type="password" placeholder="********" className="input input-bordered w-full" />
            </div>
            <button type="submit" className="btn btn-primary w-full">
              Masuk
            </button>
          </form>

          {/* Footer */}
          <div className="text-center mt-6 space-y-2">
            <p className="text-sm text-gray-500">
              Belum punya akun?{" "}
              <a href="/register" className="text-primary hover:underline font-medium">
                Daftar
              </a>
            </p>
            <button onClick={handlePopup} className="text-sm text-gray-500 hover:text-primary hover:underline transition-colors">
              Tutup
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Popup;
