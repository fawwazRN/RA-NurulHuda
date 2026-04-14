import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Play, Image as ImageIcon, Camera, LayoutGrid } from "lucide-react";

export default function Galeri() {
  const [filter, setFilter] = useState("semua");

  const categories = [
    { id: "semua", label: "Semua" },
    { id: "belajar", label: "Kegiatan Belajar" },
    { id: "lomba", label: "Lomba" },
    { id: "parenting", label: "Parenting" },
    { id: "kunjungan", label: "Kunjungan" },
  ];

  const items = [
    { id: 1, type: "image", cat: "belajar", title: "Sentra Balok", size: "md" },
    { id: 2, type: "video", cat: "lomba", title: "Lomba Mewarnai", size: "lg" },
    {
      id: 3,
      type: "image",
      cat: "parenting",
      title: "Seminar Parenting",
      size: "md",
    },
    {
      id: 4,
      type: "image",
      cat: "kunjungan",
      title: "Ke Perpustakaan",
      size: "lg",
    },
    {
      id: 5,
      type: "image",
      cat: "belajar",
      title: "Hafalan Surat Pendek",
      size: "md",
    },
    {
      id: 6,
      type: "video",
      cat: "kunjungan",
      title: "Vlog Kunjungan",
      size: "md",
    },
  ];

  const filteredItems =
    filter === "semua" ? items : items.filter((item) => item.cat === filter);

  // Varians untuk animasi Grid agar muncul satu per satu
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section
      id="galeri"
      className="relative bg-white px-6 py-24 overflow-hidden font-nunito">
      <div className="z-10 relative mx-auto max-w-6xl">
        {/* Header Galeri */}
        <div className="flex md:flex-row flex-col justify-between md:items-end gap-8 mb-16">
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 bg-orange-100 mb-4 px-4 py-1.5 rounded-xl font-black text-[10px] text-orange-600 uppercase tracking-widest">
              <Camera size={14} /> Dokumentasi Sekolah
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="font-black text-blue-950 text-4xl md:text-5xl">
              Momen Ceria{" "}
              <span className="font-handlee text-orange-500">Si Kecil</span>
            </motion.h2>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-5 py-2.5 rounded-2xl text-xs font-black uppercase tracking-tighter transition-all duration-300 ${
                  filter === cat.id
                    ? "bg-blue-950 text-white shadow-lg shadow-blue-900/20 scale-105"
                    : "bg-slate-50 text-slate-400 hover:bg-slate-100"
                }`}>
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Galeri dengan Staggered Animation */}
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="gap-6 space-y-6 columns-1 md:columns-2 lg:columns-3">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                variants={itemVariants}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.05 }} // Efek Zoom saat Hover
                whileTap={{ scale: 0.95 }} // Efek Kecil saat Ditekan
                className="group relative bg-slate-100 shadow-sm hover:shadow-2xl border-4 border-white rounded-[2.5rem] overflow-hidden transition-all duration-500 cursor-pointer">
                {/* Placeholder Media (Ganti src dengan gambar asli nanti) */}
                <div
                  className={`w-full ${item.size === "lg" ? "aspect-3/4" : "aspect-square"} bg-slate-200 relative`}>
                  {/* Icon Overlay untuk Video */}
                  {item.type === "video" && (
                    <div className="z-10 absolute inset-0 flex justify-center items-center">
                      <div className="flex justify-center items-center bg-white/30 backdrop-blur-md border border-white/50 rounded-full w-14 h-14 text-white group-hover:scale-110 transition-transform">
                        <Play size={24} fill="currentColor" />
                      </div>
                    </div>
                  )}

                  {/* Info Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-blue-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 p-8 text-white transition-opacity duration-500">
                    <p className="mb-1 font-black text-[10px] text-orange-400 uppercase tracking-widest">
                      {item.cat}
                    </p>
                    <h4 className="font-black text-lg">{item.title}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footer Galeri */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex md:flex-row flex-col justify-between items-center gap-6 bg-[#F9F7F2] mt-16 p-8 rounded-[3rem]">
          <div className="flex items-center gap-4">
            <div className="flex justify-center items-center bg-white shadow-sm rounded-2xl w-12 h-12 text-blue-950">
              <LayoutGrid size={24} />
            </div>
            <p className="max-w-xs font-bold text-slate-500 text-sm">
              Lihat lebih banyak koleksi foto dan video harian di Instagram
              resmi kami.
            </p>
          </div>
          <button className="bg-white hover:bg-blue-950 px-8 py-4 border border-slate-200 rounded-2xl font-black text-blue-950 hover:text-white text-xs uppercase tracking-widest transition-all duration-300">
            Kunjungi Instagram
          </button>
        </motion.div>
      </div>
    </section>
  );
}
