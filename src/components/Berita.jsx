import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Calendar,
  User,
  ArrowRight,
  Bookmark,
  Sparkles,
  X,
} from "lucide-react";

export default function Berita() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const artikel = [
    {
      id: 1,
      tag: "Parenting",
      title: "Cara Menangani Tantrum Anak dengan Sabar dan Bijak",
      date: "12 Okt 2024",
      author: "Admin RA",
      content:
        "Tantrum adalah ekspresi emosi anak yang belum bisa terkendali. Di RA Nurul Huda, kami menekankan pendekatan kasih sayang. Orang tua disarankan untuk tetap tenang, memberikan validasi pada perasaan anak, dan tidak memberikan hukuman fisik. Komunikasi dua arah setelah emosi mereda adalah kunci utama pembentukan karakter yang sehat.",
      img: "https://images.unsplash.com/photo-1544333346-64e4fe1820ff?auto=format&fit=crop&q=80&w=400",
      color: "text-orange-500 bg-orange-50",
    },
    {
      id: 2,
      tag: "Kegiatan",
      title: "Keseruan Lomba Mewarnai dalam Rangka Hari Anak Nasional",
      date: "10 Okt 2024",
      author: "Humas RA",
      content:
        "Lomba mewarnai tahun ini diikuti oleh seluruh siswa dengan antusiasme tinggi. Selain mengasah kreativitas dalam memadukan warna, kegiatan ini juga melatih fokus dan konsentrasi anak. Melalui kompetisi sehat ini, anak-anak belajar untuk menghargai proses dan karya teman sejawatnya.",
      img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=400",
      color: "text-blue-500 bg-blue-50",
    },
    {
      id: 3,
      tag: "Karakter",
      title: "Membiasakan Doa Harian: Tips Pendidikan Karakter Sejak Dini",
      date: "08 Okt 2024",
      author: "Guru Agama",
      content:
        "Doa harian bukan sekadar hafalan, melainkan bentuk syukur dan pengenalan Tuhan sejak dini. Membiasakan doa sebelum dan sesudah beraktivitas di rumah akan memperkuat nilai-nilai religius yang diajarkan di sekolah. Konsistensi antara sekolah dan rumah sangat penting dalam pendidikan karakter ini.",
      img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=400",
      color: "text-purple-500 bg-purple-50",
    },
  ];

  const featuredArticle = {
    title:
      "Pentingnya Sinergi Guru dan Orang Tua dalam Membentuk Akhlakul Karimah",
    date: "15 Okt 2024",
    author: "Kepala Sekolah",
    content:
      "Membangun karakter anak tidak bisa dilakukan sendirian oleh sekolah. Dibutuhkan keselarasan nilai antara apa yang diajarkan di kelas dan apa yang dipraktikkan di rumah. Sinergi ini akan menciptakan lingkungan yang stabil bagi tumbuh kembang akhlak anak, sehingga nilai-nilai kebaikan menjadi kebiasaan alami mereka sehari-hari.",
    img: "https://images.unsplash.com/photo-1484820540004-14229fe36ca4?auto=format&fit=crop&q=80&w=800",
    tag: "Utama",
    color: "text-blue-500 bg-blue-50",
  };

  return (
    <section
      id="berita"
      className="relative bg-[#FDFCFB] px-6 py-24 overflow-hidden font-nunito">
      <div className="z-10 relative mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="flex md:flex-row flex-col justify-between items-center gap-6 mb-16">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 bg-blue-950 mb-4 px-4 py-1.5 rounded-xl font-black text-[10px] text-white uppercase tracking-widest">
              <Sparkles size={14} className="text-orange-400" /> Wawasan Orang
              Tua
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="font-black text-blue-950 text-4xl md:text-5xl">
              Berita &{" "}
              <span className="font-handlee text-orange-500">Inspirasi</span>
            </motion.h2>
          </div>
          <button className="flex items-center gap-2 font-black text-slate-400 hover:text-orange-500 text-sm uppercase tracking-widest transition-colors">
            Lihat Semua Artikel <ArrowRight size={18} />
          </button>
        </div>

        <div className="gap-8 grid grid-cols-1 lg:grid-cols-12">
          {/* Featured Article */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="group lg:col-span-7 cursor-pointer"
            onClick={() => setSelectedArticle(featuredArticle)}>
            <div className="relative bg-slate-200 mb-6 rounded-[3.5rem] aspect-16/10 overflow-hidden">
              <img
                src={featuredArticle.img}
                alt="Main News"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="top-6 left-6 absolute">
                <span className="bg-white/90 shadow-sm backdrop-blur-md px-5 py-2 rounded-2xl font-black text-blue-950 text-xs uppercase tracking-widest">
                  Terbaru
                </span>
              </div>
            </div>
            <div className="px-4">
              <div className="flex items-center gap-4 mb-4 font-bold text-slate-400 text-xs">
                <span className="flex items-center gap-1">
                  <Calendar size={14} /> {featuredArticle.date}
                </span>
                <span className="flex items-center gap-1">
                  <User size={14} /> Oleh {featuredArticle.author}
                </span>
              </div>
              <h3 className="mb-4 font-black text-blue-950 group-hover:text-orange-500 text-2xl md:text-3xl leading-tight transition-colors">
                {featuredArticle.title}
              </h3>
              <p className="mb-6 max-w-2xl font-bold text-slate-500 text-sm leading-relaxed">
                {featuredArticle.content.substring(0, 160)}...
              </p>
              <div className="inline-flex items-center gap-2 font-black text-orange-500 text-xs uppercase tracking-[0.2em]">
                Baca Selengkapnya <ArrowRight size={14} />
              </div>
            </div>
          </motion.div>

          {/* Samping Articles */}
          <div className="space-y-6 lg:col-span-5">
            {artikel.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group flex gap-5 hover:bg-white hover:shadow-slate-100 hover:shadow-xl p-4 rounded-[2.5rem] transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedArticle(item)}>
                <div className="bg-slate-100 rounded-3xl w-24 md:w-32 h-24 md:h-32 overflow-hidden shrink-0">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span
                    className={`inline-block w-fit px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest mb-2 ${item.color}`}>
                    {item.tag}
                  </span>
                  <h4 className="font-black text-blue-950 group-hover:text-orange-500 text-sm md:text-base line-clamp-2 leading-snug transition-colors">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-3 mt-3 font-bold text-[10px] text-slate-400 uppercase">
                    <span>{item.date}</span>
                    <Bookmark size={12} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL BACA SELENGKAPNYA */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="z-999 fixed inset-0 flex justify-center items-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="absolute inset-0 bg-blue-950/40 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white shadow-2xl p-8 md:p-12 rounded-[3rem] w-full max-w-2xl max-h-[85vh] overflow-y-auto scrollbar-hide">
              <button
                onClick={() => setSelectedArticle(null)}
                className="top-6 right-6 absolute bg-slate-100 hover:bg-orange-500 p-2 rounded-full text-slate-500 hover:text-white transition-all">
                <X size={20} />
              </button>
              <span
                className={`inline-block px-4 py-1.5 rounded-xl text-[10px] font-black uppercase mb-4 ${selectedArticle.color}`}>
                {selectedArticle.tag}
              </span>
              <h2 className="mb-4 font-black text-blue-950 text-2xl md:text-3xl leading-tight">
                {selectedArticle.title}
              </h2>
              <div className="flex items-center gap-4 mb-6 font-bold text-slate-400 text-xs">
                <span className="flex items-center gap-1">
                  <Calendar size={14} /> {selectedArticle.date}
                </span>
                <span className="flex items-center gap-1">
                  <User size={14} /> {selectedArticle.author}
                </span>
              </div>
              <img
                src={selectedArticle.img}
                className="mb-6 rounded-3xl w-full object-cover aspect-video"
              />
              <p className="font-bold text-slate-600 text-lg leading-relaxed">
                {selectedArticle.content}
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
