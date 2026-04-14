import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  BookOpen,
  Clock,
  Sparkles,
  CheckCircle,
  Sun,
  Hand,
  ArrowRight,
} from "lucide-react";

export default function ProgramPembelajaran() {
  const [activeWindow, setActiveWindow] = useState("kurikulum");

  const kurikulumData = [
    {
      title: "Kurikulum RA",
      subtitle: "Pendidikan Beradab",
      desc: "Anak belajar mengenal nilai-nilai Islam, menghafal doa harian, dan pembentukan karakter melalui metode bermain yang terarah.",
      points: [
        "Hafalan Surah Pendek",
        "Pengenalan Huruf Hijaiyah",
        "Adab dan Akhlak",
      ],
      bgColor: "bg-orange-50",
      borderColor: "border-orange-400",
      titleColor: "text-orange-600",
      pointBg: "bg-orange-100",
      pointText: "text-orange-950",
    },
    {
      title: "Active Learning",
      subtitle: "Eksplorasi Sentra",
      desc: "Metode belajar aktif di mana anak bebas bereksplorasi di sentra balok, persiapan, dan seni untuk mengasah kreativitas.",
      points: ["Sains Sederhana", "Kreativitas Seni", "Kerjasama Tim"],
      bgColor: "bg-blue-50",
      borderColor: "border-blue-600",
      titleColor: "text-blue-600",
      pointBg: "bg-blue-100",
      pointText: "text-blue-950",
    },
  ];

  const jadwalData = [
    {
      time: "07:30",
      activity: "Morning Circle",
      icon: <Sun size={20} />,
      color: "bg-orange-100",
      textColor: "text-orange-700",
    },
    {
      time: "08:30",
      activity: "Inti Pembelajaran",
      icon: <BookOpen size={20} />,
      color: "bg-blue-100",
      textColor: "text-blue-700",
    },
    {
      time: "10:00",
      activity: "Istirahat Sehat",
      icon: <Hand size={20} />,
      color: "bg-orange-100",
      textColor: "text-orange-700",
    },
    {
      time: "11:00",
      activity: "Refleksi dan Doa",
      icon: <Clock size={20} />,
      color: "bg-blue-100",
      textColor: "text-blue-700",
    },
  ];

  return (
    <section className="relative bg-[#F9F7F2] px-4 md:px-6 py-16 md:py-24 border-slate-200 border-t-8 border-dashed overflow-hidden font-nunito">
      {/* Dekorasi Latar Belakang - Animasi Partikel */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="-top-10 -right-20 absolute bg-orange-200/30 blur-3xl rounded-full w-64 md:w-96 h-64 md:h-96"
      />
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="bottom-20 -left-10 absolute bg-blue-200/30 blur-3xl rounded-full w-56 md:w-80 h-56 md:h-80"
      />

      <div className="z-10 relative mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="relative mb-12 md:mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-white shadow-md mb-6 px-4 md:px-5 py-2 border border-slate-200 rounded-full">
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}>
              <Sparkles className="text-orange-400" size={16} />
            </motion.div>
            <span className="font-black text-[10px] text-slate-500 md:text-xs uppercase tracking-widest">
              Metode Pembelajaran
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="px-2 font-black text-blue-950 text-3xl md:text-6xl leading-tight">
            Tumbuh Cerdas dan <br />
            <span className="text-orange-500">Berakhlak Mulia</span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            className="bg-blue-600 mx-auto mt-4 md:mt-6 rounded-full h-1.5 md:h-2"></motion.div>
        </div>

        {/* Container Utama */}
        <div className="relative bg-white shadow-2xl p-5 md:p-12 border-2 border-slate-100 md:border-4 rounded-4xl md:rounded-[3rem]">
          {/* Navigasi Tab - Responsive Handling */}
          <div className="-top-6 md:-top-7 left-4 md:left-8 absolute flex gap-2 md:gap-3">
            {["kurikulum", "jadwal"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveWindow(tab)}
                className={`relative px-4 md:px-8 py-2 md:py-3 rounded-t-xl md:rounded-t-2xl font-black text-[11px] md:text-sm transition-colors duration-300 z-10 ${
                  activeWindow === tab
                    ? "text-blue-600"
                    : "text-slate-400 hover:text-slate-600"
                }`}>
                {tab === "kurikulum" ? "Kurikulum" : "Jadwal Harian"}
                {activeWindow === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="-z-10 absolute inset-0 bg-white shadow-[-5px_-5px_15px_rgba(0,0,0,0.05)] rounded-t-xl md:rounded-t-2xl"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="mt-6 md:mt-10">
            <AnimatePresence mode="wait">
              {activeWindow === "kurikulum" ? (
                <motion.div
                  key="kurikulum"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="gap-6 md:gap-8 grid grid-cols-1 md:grid-cols-2">
                  {kurikulumData.map((item, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -8 }}
                      className={`relative p-6 md:p-8 rounded-4xl md:rounded-[3rem] border-2 md:border-4 ${item.borderColor} ${item.bgColor} shadow-lg transition-all`}>
                      <div className="flex justify-center items-center bg-white shadow-sm mb-4 md:mb-6 rounded-xl md:rounded-2xl w-12 md:w-14 h-12 md:h-14">
                        <div className={item.titleColor}>
                          <BookOpen size={24} />
                        </div>
                      </div>
                      <span className="font-black text-[10px] text-slate-400 md:text-xs uppercase tracking-wider">
                        {item.subtitle}
                      </span>
                      <h3
                        className={`text-xl md:text-2xl font-black ${item.titleColor} mt-1 mb-3 md:mb-4`}>
                        {item.title}
                      </h3>
                      <p
                        className={`${item.pointText} font-bold text-xs md:text-sm leading-relaxed mb-5 md:mb-6 opacity-80`}>
                        {item.desc}
                      </p>

                      <ul className="space-y-2 md:space-y-3">
                        {item.points.map((p, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={`flex items-center gap-3 text-xs md:text-sm font-black ${item.pointText}`}>
                            <CheckCircle
                              size={16}
                              className={item.titleColor}
                            />{" "}
                            {p}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="jadwal"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  className="space-y-3 md:space-y-4 mx-auto max-w-3xl">
                  {jadwalData.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1, type: "spring" }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className={`${item.color} p-4 md:p-5 rounded-2xl md:rounded-3xl flex flex-col sm:flex-row items-start sm:items-center justify-between border-b-4 border-black/5 group cursor-default transition-all gap-3 sm:gap-0`}>
                      <div className="flex items-center gap-4 md:gap-6">
                        <motion.div
                          whileHover={{ rotate: 15 }}
                          className="flex justify-center items-center bg-white shadow-md rounded-xl md:rounded-2xl w-12 md:w-14 h-12 md:h-14 text-blue-600 shrink-0">
                          {item.icon}
                        </motion.div>
                        <div>
                          <h4 className="font-black text-blue-950 text-lg md:text-xl">
                            {item.activity}
                          </h4>
                          <p className="font-bold text-[10px] text-slate-400 md:text-xs uppercase tracking-widest">
                            Aktivitas Harian
                          </p>
                        </div>
                      </div>
                      <div className="bg-white/50 px-4 md:px-6 py-2 rounded-xl md:rounded-2xl w-full sm:w-auto sm:text-left text-center">
                        <span
                          className={`font-black ${item.textColor} text-xs md:text-sm`}>
                          Pukul {item.time}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Footer Link */}
        <div className="mt-12 md:mt-16 px-4 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0px 0px 0px rgba(30, 58, 138, 0)",
                "0px 0px 20px rgba(30, 58, 138, 0.3)",
                "0px 0px 0px rgba(30, 58, 138, 0)",
              ],
            }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="group inline-flex justify-center items-center gap-3 md:gap-4 bg-blue-950 hover:bg-blue-900 shadow-2xl px-8 md:px-12 py-4 md:py-5 rounded-full w-full sm:w-auto font-black text-white text-sm md:text-base transition-all">
            Informasi Pendaftaran
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-2"
            />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
