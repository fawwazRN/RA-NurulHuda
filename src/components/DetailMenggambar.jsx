import { motion, AnimatePresence } from "framer-motion";
import {
  Palette,
  CheckCircle2,
  Clock,
  MapPin,
  ArrowLeft,
  Star,
  Camera,
} from "lucide-react";
import { Link } from "react-router";

export default function DetailMenggambar() {
  const points = [
    "Pengenalan dasar garis dan bentuk",
    "Teknik pewarnaan gradasi dengan krayon",
    "Melatih fokus dan kesabaran anak",
    "Media lukis yang aman (Non-Toxic)",
    "Penyaluran emosi positif melalui karya",
  ];

  // Varians untuk kemunculan poin secara berurutan
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  return (
    <div className="bg-[#FFF9F2] pb-20 min-h-screen overflow-hidden font-nunito">
      {/* Header / Nav dengan Slide Down */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex justify-between items-center mx-auto p-6 max-w-6xl">
        <Link
          to="/#ekstrakurikuler"
          className="group flex items-center gap-2 font-black text-slate-500 hover:text-orange-500 text-sm uppercase tracking-widest transition-colors">
          <motion.div whileHover={{ x: -5 }}>
            <ArrowLeft size={20} />
          </motion.div>
          Kembali
        </Link>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 bg-white shadow-sm px-4 py-2 border border-orange-100 rounded-2xl">
          <Star size={16} className="fill-orange-400 text-orange-400" />
          <span className="font-black text-blue-950 text-xs uppercase tracking-tighter">
            Ekskul Unggulan
          </span>
        </motion.div>
      </motion.nav>

      <main className="mx-auto mt-10 px-6 max-w-4xl">
        {/* Judul & Intro dengan Efek Bounce */}
        <div className="flex md:flex-row flex-col items-center gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            whileHover={{ rotate: [0, -5, 5, 0], scale: 1.05 }}
            transition={{ type: "spring", damping: 10 }}
            className="flex justify-center items-center bg-white shadow-orange-200/50 shadow-xl rounded-[3rem] w-32 md:w-48 h-32 md:h-48 text-[#FB923C] shrink-0">
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
                y: [0, -8, 0],
              }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}>
              <Palette size={80} strokeWidth={1.5} />
            </motion.div>
          </motion.div>

          <div className="md:text-left text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 font-black text-blue-950 text-4xl md:text-6xl tracking-tight">
              Seni{" "}
              <motion.span
                animate={{ color: ["#FB923C", "#f97316", "#FB923C"] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-orange-500">
                Menggambar
              </motion.span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-bold text-slate-500 text-lg leading-relaxed">
              Membangun dunia imajinasi si kecil melalui goresan warna yang
              ceria dan penuh makna.
            </motion.p>
          </div>
        </div>

        {/* Konten Utama */}
        <div className="gap-8 grid grid-cols-1 md:grid-cols-3">
          {/* Kolom Kiri: Deskripsi */}
          <div className="space-y-8 md:col-span-2">
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white shadow-sm p-8 md:p-12 border border-orange-100 rounded-[3.5rem]">
              <h3 className="mb-6 font-black text-blue-950 text-2xl">
                Tentang Program
              </h3>
              <p className="mb-6 font-bold text-slate-600 leading-relaxed">
                Di RA Nurul Huda, menggambar bukan hanya soal estetika, tapi
                tentang melatih{" "}
                <span className="font-black text-orange-500 tracking-tight">
                  motorik halus
                </span>{" "}
                dan{" "}
                <span className="font-black text-orange-500 tracking-tight">
                  kepercayaan diri
                </span>
                . Kami menyediakan lingkungan di mana setiap coretan dihargai
                sebagai prestasi.
              </p>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="gap-4 grid grid-cols-1 sm:grid-cols-2">
                {points.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    whileHover={{ x: 8, backgroundColor: "#FFF9F2" }}
                    className="flex items-center gap-3 bg-[#FFF9F2]/50 p-4 border border-transparent hover:border-orange-200 rounded-2xl transition-all cursor-default">
                    <CheckCircle2
                      className="text-orange-400 shrink-0"
                      size={20}
                    />
                    <span className="font-black text-slate-700 text-xs uppercase tracking-tighter">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Gallery Placeholder dengan Efek Lift */}
            <section className="gap-4 grid grid-cols-2">
              <motion.div
                whileHover={{ y: -5, rotate: -1 }}
                className="group flex justify-center items-center bg-white border border-orange-100 rounded-[2.5rem] aspect-video overflow-hidden text-slate-300 cursor-pointer">
                <Camera
                  size={32}
                  className="group-hover:scale-125 transition-transform duration-500"
                />
              </motion.div>
              <motion.div
                whileHover={{ y: -5, rotate: 1 }}
                className="group flex justify-center items-center bg-white border border-orange-100 rounded-[2.5rem] aspect-video font-bold text-slate-300 text-xs text-center italic uppercase tracking-widest cursor-pointer">
                <span className="group-hover:text-orange-300 transition-colors">
                  Karya Siswa
                </span>
              </motion.div>
            </section>
          </div>

          {/* Kolom Kanan: Info Side */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative bg-blue-950 shadow-2xl shadow-orange-900/10 p-8 rounded-[3rem] overflow-hidden text-white">
              {/* Dekorasi kecil di dalam card */}
              <div className="top-[-10%] right-[-10%] absolute bg-orange-500/10 blur-xl rounded-full w-24 h-24" />

              <h4 className="mb-6 font-black text-orange-400 text-xs uppercase tracking-[0.2em]">
                Informasi Ekskul
              </h4>

              <div className="space-y-6">
                {[
                  {
                    icon: <Clock size={20} />,
                    label: "Waktu",
                    desc: "Setiap Selasa\n08:00 - 09:30 WIB",
                  },
                  {
                    icon: <MapPin size={20} />,
                    label: "Lokasi",
                    desc: "Ruang Kreativitas / Sentra Seni",
                  },
                ].map((info, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 + idx * 0.2 }}
                    className="flex items-start gap-4">
                    <div className="text-white/40">{info.icon}</div>
                    <div>
                      <p className="font-black text-[10px] text-white/30 uppercase">
                        {info.label}
                      </p>
                      <p className="font-bold leading-snug whitespace-pre-line">
                        {info.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}

                <div className="pt-6">
                  <motion.button
                    whileHover={{ scale: 1.03, backgroundColor: "#ea580c" }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-orange-500 shadow-lg shadow-orange-600/20 py-4 rounded-2xl w-full font-black text-xs uppercase tracking-widest transition-all">
                    Daftar Sekarang
                  </motion.button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="group bg-white p-8 border border-orange-100 rounded-[3rem]">
              <p className="mb-2 font-black text-[10px] text-slate-400 uppercase tracking-widest">
                Mentor:
              </p>
              <p className="font-black text-blue-950 group-hover:text-orange-500 transition-colors duration-300">
                Ibu Siti Masithoh, S.Pd
              </p>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
