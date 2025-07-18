import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">Deni - Restoran</h2>
            <p className="text-sm text-gray-600">Makanan rumahan, rasa premium, harga bersahabat.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Menu</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>
                <a href="#" className="hover:text-primary">
                  Menu Hari Ini
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Cara Langganan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Bantuan
                </a>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
            <h3 className="font-semibold text-lg mb-2 text-gray-800">Akun Saya</h3>
            <p className="text-sm text-gray-600 mb-4">Bergabunglah untuk kemudahan pemesanan & langganan makanan favoritmu.</p>
            <div className="flex flex-col gap-2">
              <a href="/login" className="block text-center px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition">
                Masuk
              </a>
              <a href="/register" className="block text-center px-4 py-2 bg-white border border-primary text-primary rounded hover:bg-primary/10 transition">
                Daftar Akun
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500 py-4 border-t">© 2025 Deni - Restoran. Semua hak dilindungi.</div>
      </div>
    </footer>
  );
};

export default Footer;
