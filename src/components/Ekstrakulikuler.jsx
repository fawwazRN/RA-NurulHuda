import { motion } from "framer-motion";
import { Palette, Map, Bus, Users, ArrowRight, Camera } from "lucide-react";

export default function Ekstrakurikuler() {
  const ekskul = [
    {
      title: "Seni Menggambar",
      desc: "Mengeksplorasi imajinasi dan melatih motorik halus anak melalui warna dan bentuk.",
      icon: <Palette size={28} />,
      color: "bg-[#FFF9F2]",
      borderColor: "border-[#FEE2E2]",
      iconColor: "text-[#FB923C]",
      link: "/ekskul/menggambar",
    },
    {
      title: "Outbound Ceria",
      desc: "Melatih keberanian dan kerjasama tim di alam terbuka yang aman dan menyenangkan.",
      icon: <Map size={28} />,
      color: "bg-[#F0F9FF]",
      borderColor: "border-[#E0F2FE]",
      iconColor: "text-[#0EA5E9]",
      link: "/ekskul/outbound",
    },
    {
      title: "Kunjungan Belajar",
      desc: "Mengenal lingkungan sekitar melalui perjalanan edukatif yang seru ke berbagai tempat.",
      icon: <Bus size={28} />,
      color: "bg-[#F5F3FF]",
      borderColor: "border-[#EDE9FE]",
      iconColor: "text-[#8B5CF6]",
      link: "/ekskul/kunjungan",
    },
    {
      title: "Parenting Day",
      desc: "Sinergi antara sekolah dan orang tua untuk tumbuh kembang anak yang optimal.",
      icon: <Users size={28} />,
      color: "bg-[#F0FDF4]",
      borderColor: "border-[#DCFCE7]",
      iconColor: "text-[#22C55E]",
      link: "/ekskul/parenting",
    },
  ];

  // Varians untuk Container (Staggered Effect)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Varians untuk setiap Card
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  return (
    <section
      id="ekstrakurikuler"
      className="relative bg-[#FDFCFB] px-6 py-24 overflow-hidden font-nunito">
      {/* Dekorasi Background dengan Animasi Floating */}
      <div className="top-0 left-0 absolute w-full h-full pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="top-[-10%] right-[-5%] absolute bg-orange-100/40 blur-[100px] rounded-full w-96 h-96"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="bottom-[-10%] left-[-5%] absolute bg-blue-100/40 blur-[100px] rounded-full w-96 h-96"
        />
      </div>

      <div className="z-10 relative mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1 }}
            className="block mb-4 font-black text-orange-500 text-xs uppercase">
            Extra Fun Activities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-black text-blue-950 text-4xl md:text-5xl tracking-tight">
            Eksplorasi Bakat <span className="text-orange-400">&</span> Minat
          </motion.h2>
        </div>

        {/* Grid Card dengan Staggered Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {ekskul.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{
                y: -12,
                transition: { type: "spring", stiffness: 300 },
              }}
              whileTap={{ scale: 0.95 }}
              className={`group relative p-8 rounded-[3rem] ${item.color} border border-transparent hover:border-white hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 cursor-pointer`}
              onClick={() => (window.location.href = item.link)}>
              {/* Icon Container dengan Hover Rotate */}
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                className={`w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center ${item.iconColor} mb-6 transition-transform duration-500`}>
                {item.icon}
              </motion.div>

              <h3 className="mb-3 font-black text-blue-950 text-xl tracking-tight">
                {item.title}
              </h3>

              <p className="mb-8 font-bold text-slate-500 text-xs leading-relaxed">
                {item.desc}
              </p>

              <div className="flex items-center gap-2">
                <span
                  className={`text-[11px] font-black uppercase tracking-widest ${item.iconColor}`}>
                  Lihat Detail
                </span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className={`p-1.5 rounded-full ${item.color} border ${item.borderColor}`}>
                  <ArrowRight size={14} className={item.iconColor} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlight Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-linear-to-r from-orange-100 via-white to-blue-100 mt-20 p-1 rounded-[4rem]">
          <div className="flex md:flex-row flex-col items-center gap-12 bg-white/60 backdrop-blur-md p-10 md:p-16 border border-white rounded-[3.9rem]">
            <div className="flex-1">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="mb-6 font-black text-blue-950 text-3xl leading-tight">
                Dukung Tumbuh Kembang <br /> Si Kecil Secara{" "}
                <span className="inline-block relative">
                  <span className="text-orange-500 decoration-8 decoration-orange-200 underline underline-offset-4">
                    Optimal.
                  </span>
                </span>
              </motion.h3>
              <p className="mb-8 max-w-lg font-bold text-slate-500 text-sm leading-relaxed">
                Kami menyediakan lingkungan yang suportif agar setiap anak
                berani mencoba hal baru dan menemukan kegembiraan dalam setiap
                proses belajarnya.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#f97316" }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-950 shadow-lg px-8 py-4 rounded-2xl font-black text-white text-xs uppercase tracking-widest transition-all duration-300">
                Gabung Sekarang
              </motion.button>
            </div>

            {/* Dekorasi Gambar / Placeholder dengan Efek Floating */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full md:w-1/3 aspect-square">
              <div className="absolute inset-0 bg-orange-400 opacity-10 rounded-[3rem] rotate-6"></div>
              <div className="absolute inset-0 bg-blue-600 opacity-10 rounded-[3rem] -rotate-3"></div>
              <div className="group relative flex justify-center items-center bg-slate-100 shadow-xl border-4 border-white rounded-[3rem] w-full h-full overflow-hidden">
                <Camera
                  size={48}
                  className="text-slate-300 group-hover:rotate-12 group-hover:scale-125 transition-transform duration-700"
                />
                <div className="bottom-4 left-0 absolute w-full text-center">
                  <span className="font-black text-[10px] text-slate-400 uppercase tracking-widest">
                    Gallery Foto
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
