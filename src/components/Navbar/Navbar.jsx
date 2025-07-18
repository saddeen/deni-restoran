import React, { useState } from "react";
import { FaCaretDown, FaUser, FaBars, FaTimes } from "react-icons/fa";
const NavLinks = [
  {
    id: 1,
    label: "Beranda",
    link: "#beranda",
  },
  {
    id: 2,
    label: "Keunggulan",
    link: "#keunggulan",
  },
  {
    id: 3,
    label: "Tentang",
    link: "#tentang",
  },
  {
    id: 4,
    label: "Kontak",
    link: "#kontak",
  },
];

const Navbar = ({ handlePopup }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="container w-full py-5 lg:px-3.5 lg:py-2.5 px-4 flex items-center justify-between">
          {/* Logo Section */}
          <div>
            <h1 className="text-xl font-semibold tracking-wider md:tracking-widest lg:text-3xl font-lobster">Deni - Restoran </h1>
          </div>
          {/* Hamburger Menu (mobile) */}
          <button className="md:hidden text-2xl ml-auto" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          {/* Navlink Section */}
          <div>
            <ul className="hidden md:flex items-center gap-5">
              {NavLinks.map((item) => (
                <li key={item.id}>
                  <a href={item.link} className="inline-block text-lg font-semibold hover:text-primary">
                    {item.label}
                  </a>
                </li>
              ))}

              <li>
                <button onClick={handlePopup} className="flex items-center gap-2 text-lg font-semibold hover:text-primary bg-accent py-2 px-4 rounded hover:scale-95 transition duration-500">
                  <FaUser />
                  Akun Pengguna
                </button>
              </li>
            </ul>
          </div>
        </div>
        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden bg-primary text-white shadow-md px-4 pt-4 pb-6">
            <ul className="flex flex-col gap-4">
              {NavLinks.map((item) => (
                <li key={item.id}>
                  <a href={item.link} className="block text-md font-jost font-semibold hover:text-primary">
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <button onClick={handlePopup} className="flex items-center gap-2 text-lg font-semibold hover:text-primary bg-accent py-2 px-4 rounded w-full justify-center">
                  <FaUser />
                  Akun Pengguna
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
