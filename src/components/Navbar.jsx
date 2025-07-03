import { useState, useEffect } from "react";
import React from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="navbar py-7 flex items-center justify-between relative z-50">
      {/* Logo */}
      <div className="logo">
        <h1 className="text-3xl font-bold bg-white text-black p-1 md:bg-transparent md:text-white">
          My-Portofolio
        </h1>
      </div>

      {/* Menu */}
      <ul
        className={`menu flex items-center sm:gap-10 gap-4 md:static fixed left-1/2 -translate-x-1/2 md:-translate-x-0
         md:opacity-100 bg-white/30 backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl md:bg-transparent transition-all md:transition-none z-40
         ${active ? "top-0 opacity-100" : "-top-10 opacity-0"}`}
      >
        <li>
          <a href="#beranda" className="sm:text-lg text-base font-medium">
            Beranda
          </a>
        </li>
        <li>
          <a href="#tentang" className="sm:text-lg text-base font-medium">
            Tentang
          </a>
        </li>
        <li>
          <a href="#proyek" className="sm:text-lg text-base font-medium">
            Project
          </a>
        </li>
        <li>
          <a href="#kontak" className="sm:text-lg text-base font-medium">
            Contact
          </a>
        </li>
        <li>
          <a href="#database" className="sm:text-lg text-base font-medium">
            Riwayat
          </a>
        </li>
      </ul>

      {/* Tombol Sign In / Sign Up */}
      <div className="hidden md:flex items-center gap-3">
        <a
          href="/signin"
          className="text-sm font-medium px-4 py-2 border border-white text-white rounded-xl hover:bg-white hover:text-black transition"
        >
          Sign In
        </a>
        <a
          href="/signup"
          className="text-sm font-medium px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
        >
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Navbar;
