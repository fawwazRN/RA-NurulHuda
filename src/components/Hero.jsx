import { motion } from "framer-motion";
import React, { useState } from "react";
import siswa from "../assets/siswa.jpg";
import kelas from "../assets/kelas.jpg";
import buku from "../assets/buku.jpg";
import sekolah from "../assets/sekolah.png";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    // Hanya jalankan parallax jika layar cukup besar (desktop)
    if (window.innerWidth > 1024) {
      setMousePos({ x: e.clientX, y: e.clientY });
    }
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative flex items-center bg-[#F9F7F2] w-full lg:h-screen min-h-screen overflow-hidden font-nunito">
      {/* Background Layer */}
      <div className="z-0 absolute inset-0">
        <img src={sekolah} alt="BG" className="w-full h-full object-cover" />

        {/* GRADIENT UNTUK DESKTOP (Layar Lebar) */}
        <div className="hidden lg:block z-10 absolute inset-0 bg-linear-to-r from-black/70 via-black/20 to-transparent"></div>

        {/* GRADIENT KHUSUS HP (Sangat Halus & Multi-layer) */}
        <div className="lg:hidden z-10 absolute inset-0">
          {/* Layer 1: Base Gelap */}
          <div className="absolute inset-0 bg-black/40"></div>
          {/* Layer 2: Transition Smooth */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 40%, rgba(255,255,255,0) 80%, rgba(255,255,255,1) 100%)",
            }}></div>
        </div>

        {/* ANTI-PECAH (NOISE TEXTURE) - Sangat efektif di HP */}
      </div>

      <div className="z-10 relative flex lg:flex-row flex-col justify-center lg:justify-between items-center gap-12 lg:gap-0 px-6 md:px-16 py-20 lg:py-0 w-full h-full">
        {/* SISI KIRI: Branding (Responsive Text) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="z-20 w-full lg:w-1/2 lg:text-left text-center">
          <span className="inline-block bg-yellow-400 mb-4 px-4 py-1 rounded-full font-bold text-yellow-900 text-xs md:text-sm uppercase tracking-widest">
            Pendaftaran 2026/2027 Dibuka!
          </span>
          <h1 className="mb-6 font-black text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.1]">
            Belajar Jadi <br />
            <span className="drop-shadow-[0_2px_0px_rgba(255,255,255,1)] text-orange-500">
              Asyik!
            </span>
          </h1>
          <p className="mx-auto lg:mx-0 mb-8 max-w-lg font-semibold text-gray-100 text-lg md:text-xl leading-relaxed">
            Membentuk karakter mulia melalui kreativitas dan kasih sayang di{" "}
            <span className="hover:font-bold text-yellow-400 hover:text-orange-400 transition-all duration-300">
              RA Nurul Huda
            </span>
            .
          </p>

          <div className="flex sm:flex-row flex-col justify-center lg:justify-start gap-4">
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="bg-orange-500 hover:bg-orange-400 shadow-[8px_8px_0px_0px_rgba(194,65,12,1)] px-10 py-4 rounded-2xl font-bold text-white text-xl hover:-rotate-1 hover:scale-110 transition-all duration-300">
              Daftar Sekarang
            </motion.button>
            <button className="flex justify-center items-center gap-2 font-bold text-white hover:text-yellow-400 text-lg transition-colors">
              Lihat Fasilitas →
            </button>
          </div>
        </motion.div>

        {/* SISI KANAN: Scrapbook (Responsive Grid/Stack) */}
        <div className="relative flex justify-center items-center w-full lg:w-1/2 min-h-100">
          {/* Foto Siswa */}
          <motion.div
            style={{
              x: (mousePos.x - 1000) * 0.01,
              y: (mousePos.y - 500) * 0.01,
            }}
            initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: -6 }}
            className="top-0 lg:-top-12.5 left-0 lg:left-10 z-10 absolute lg:relative bg-white shadow-xl p-2 border-4 border-white md:border-8 rounded-lg w-45 sm:w-60 md:w-75">
            <img
              src={siswa}
              alt="Siswa"
              className="rounded-sm h-32 sm:h-44 md:h-56 object-cover"
            />
            <p className="mt-2 font-handlee font-bold text-gray-700 text-sm md:text-base text-center">
              Teman Baru!
            </p>
          </motion.div>

          {/* Foto Kelas */}
          <motion.div
            style={{
              x: (mousePos.x - 1000) * -0.01,
              y: (mousePos.y - 500) * -0.01,
            }}
            initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 6 }}
            className="right-0 lg:right-5 bottom-0 lg:-bottom-5 z-20 absolute lg:relative bg-white shadow-2xl p-2 border-4 border-white md:border-8 rounded-lg w-45 sm:w-60 md:w-75">
            <img
              src={kelas}
              alt="Kelas"
              className="rounded-sm h-32 sm:h-44 md:h-56 object-cover"
            />
            <p className="mt-2 font-handlee font-bold text-gray-700 text-sm md:text-base text-center">
              Kelas Ceria
            </p>
          </motion.div>

          {/* Aksesoris Buku (Hidden on small mobile) */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="hidden md:block top-1/2 left-1/2 z-30 absolute bg-white shadow-lg p-1 border-4 border-white rounded-lg w-24 md:w-32 -rotate-12 -translate-x-1/2 -translate-y-1/2">
            <img
              src={buku}
              alt="Buku"
              className="rounded h-16 md:h-20 object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
