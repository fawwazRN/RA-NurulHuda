import { motion, AnimatePresence } from "framer-motion";
import {
  Map,
  CheckCircle2,
  Clock,
  MapPin,
  ArrowLeft,
  Tent,
  Camera,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router";

export default function DetailOutbound() {
  const points = [
    "Latihan keberanian di ketinggian rendah",
    "Permainan kerjasama tim (Team Building)",
    "Pengenalan flora dan fauna sekitar",
    "Eksplorasi alam tanpa gadget",
    "Melatih kemandirian dan disiplin",
  ];

  // Varians untuk Staggered Points
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <div className="bg-[#F0F9FF] pb-20 min-h-screen overflow-hidden font-nunito">
      {/* Header / Nav dengan Animasi Slide Down */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex justify-between items-center mx-auto p-6 max-w-6xl">
        <Link
          to="/#ekstrakurikuler"
          className="group flex items-center gap-2 font-black text-slate-500 hover:text-blue-500 text-sm uppercase tracking-widest transition-colors">
          <motion.div whileHover={{ x: -5 }}>
            <ArrowLeft size={20} />
          </motion.div>
          Kembali
        </Link>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 bg-white shadow-sm px-4 py-2 border border-blue-100 rounded-2xl">
          <ShieldCheck size={16} className="text-blue-500" />
          <span className="font-black text-blue-950 text-xs uppercase tracking-tighter">
            Standar Keamanan Tinggi
          </span>
        </motion.div>
      </motion.nav>

      <main className="mx-auto mt-10 px-6 max-w-4xl">
        {/* Judul & Intro dengan Animasi Pop & Float */}
        <div className="flex md:flex-row flex-col items-center gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            whileHover={{ rotate: [0, -5, 5, 0], scale: 1.05 }}
            transition={{ type: "spring", damping: 12 }}
            className="flex justify-center items-center bg-white shadow-blue-200/50 shadow-xl rounded-[3rem] w-32 md:w-48 h-32 md:h-48 text-[#0EA5E9] shrink-0">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}>
              <Map size={80} strokeWidth={1.5} />
            </motion.div>
          </motion.div>

          <div className="md:text-left text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 font-black text-blue-950 text-4xl md:text-6xl tracking-tight">
              Outbound{" "}
              <motion.span
                animate={{ color: ["#3b82f6", "#0ea5e9", "#3b82f6"] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="text-blue-500">
                Ceria
              </motion.span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-bold text-slate-500 text-lg leading-relaxed">
              Melatih fisik dan mental si kecil melalui petualangan seru yang
              edukatif di alam terbuka.
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
              className="bg-white shadow-sm p-8 md:p-12 border border-blue-100 rounded-[3.5rem]">
              <h3 className="mb-6 font-black text-blue-950 text-2xl">
                Tentang Program
              </h3>
              <p className="mb-6 font-bold text-slate-600 leading-relaxed">
                Program Outbound Ceria dirancang untuk membangun karakter anak
                yang{" "}
                <span className="font-black text-blue-500">
                  berani, mandiri, dan mampu bekerja sama
                </span>
                . Semua kegiatan diawasi oleh instruktur berpengalaman dengan
                peralatan yang aman untuk usia dini.
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
                    whileHover={{ scale: 1.03, x: 5 }}
                    className="flex items-center gap-3 bg-[#F0F9FF]/50 p-4 border border-transparent hover:border-blue-200 rounded-2xl transition-colors">
                    <CheckCircle2
                      className="text-blue-500 shrink-0"
                      size={20}
                    />
                    <span className="font-black text-slate-700 text-xs uppercase tracking-tighter">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Gallery Placeholder dengan Hover Glow */}
            <section className="gap-4 grid grid-cols-2">
              <motion.div
                whileHover={{ scale: 0.98, rotate: -1 }}
                className="group flex justify-center items-center bg-white border border-blue-100 rounded-[2.5rem] aspect-video overflow-hidden text-slate-300 cursor-pointer">
                <Camera
                  size={32}
                  className="group-hover:scale-125 transition-transform"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 0.98, rotate: 1 }}
                className="flex justify-center items-center bg-white px-4 border border-blue-100 rounded-[2.5rem] aspect-video font-bold text-slate-300 text-xs text-center italic uppercase tracking-widest cursor-pointer">
                Dokumentasi Petualangan
              </motion.div>
            </section>
          </div>

          {/* Kolom Kanan: Info Side dengan Sticky effect */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-blue-950 shadow-blue-900/20 shadow-xl p-8 rounded-[3rem] text-white">
              <h4 className="mb-6 font-black text-blue-400 text-xs uppercase tracking-[0.2em]">
                Informasi Kegiatan
              </h4>

              <div className="space-y-6">
                {[
                  {
                    icon: <Clock size={20} />,
                    label: "Waktu",
                    desc: "Sabtu (1x Sebulan)\n07:30 - 11:00 WIB",
                  },
                  {
                    icon: <MapPin size={20} />,
                    label: "Lokasi",
                    desc: "Area Terbuka Sekolah / Taman Kota",
                  },
                ].map((info, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 + idx * 0.2 }}
                    className="flex items-start gap-4">
                    <div className="text-white/50">{info.icon}</div>
                    <div>
                      <p className="font-black text-[10px] text-white/40 uppercase">
                        {info.label}
                      </p>
                      <p className="font-bold whitespace-pre-line">
                        {info.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}

                <div className="pt-6">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-blue-500 hover:bg-blue-600 shadow-blue-500/30 shadow-lg py-4 rounded-2xl w-full font-black text-xs uppercase tracking-widest transition-all">
                    Ikut Petualangan
                  </motion.button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="group bg-white p-8 border border-blue-100 rounded-[3rem]">
              <div className="flex items-center gap-3 mb-2">
                <motion.div
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 4 }}>
                  <Tent className="text-blue-500" size={18} />
                </motion.div>
                <p className="font-black text-slate-400 text-xs uppercase tracking-widest">
                  Peralatan:
                </p>
              </div>
              <p className="font-bold text-blue-950 group-hover:text-blue-600 text-sm transition-colors">
                Disediakan oleh sekolah (Helm, Harnes, dll)
              </p>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
