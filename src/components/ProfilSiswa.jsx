import { motion } from "framer-motion";

export default function ProfilSiswa() {
  const kegiatan = [
    {
      name: "Pagi Ceria",
      time: "07:30 - 08:30",
      desc: "Penyambutan hangat dan olahraga ringan.",
      color: "bg-rose-50",
      accent: "bg-rose-400",
      textColor: "text-rose-950",
    },
    {
      name: "Ibadah & Doa",
      time: "08:30 - 09:30",
      desc: "Pembiasaan nilai religius sejak dini.",
      color: "bg-sky-50",
      accent: "bg-sky-400",
      textColor: "text-sky-950",
    },
    {
      name: "Eksplorasi",
      time: "09:30 - 10:30",
      desc: "Bermain bebas dan sosialisasi antar teman.",
      color: "bg-emerald-50",
      accent: "bg-emerald-400",
      textColor: "text-emerald-950",
    },
    {
      name: "Seni Kreatif",
      time: "10:30 - 11:30",
      desc: "Mengasah imajinasi melalui karya tangan.",
      color: "bg-amber-50",
      accent: "bg-amber-400",
      textColor: "text-amber-950",
    },
  ];

  const pencapaian = [
    "Mampu bersosialisasi dengan percaya diri",
    "Mengenal nilai-nilai dasar kejujuran",
    "Memiliki kemandirian dalam aktivitas harian",
    "Terbiasa dengan hafalan doa-doa pendek",
  ];

  // Varian untuk Container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  // Varian untuk Item Kegiatan
  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 70, damping: 15 },
    },
  };

  return (
    <section className="relative bg-[#FDFCF0] px-6 py-24 overflow-hidden font-nunito">
      <div className="mx-auto max-w-7xl">
        {/* HEADER SECTION */}
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-blue-100 shadow-sm mb-4 px-6 py-2 rounded-full font-black text-blue-600 text-sm uppercase tracking-widest">
            Keseharian di Sekolah
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-black text-blue-950 text-4xl md:text-6xl">
            Jejak Ceria <span className="text-orange-500">Siswa Kami</span>
          </motion.h2>
        </div>

        <div className="gap-12 lg:gap-20 grid grid-cols-1 lg:grid-cols-12">
          {/* TIMELINE SECTION (7 Cols) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative space-y-8 lg:col-span-7">
            {/* Animated Timeline Line */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="top-0 left-6 absolute bg-slate-200 rounded-full w-1"
            />

            {kegiatan.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className="group relative flex items-center gap-8 pl-12">
                {/* Dot Marker */}
                <div
                  className={`absolute left-4.5 w-3 h-3 rounded-full ${item.accent} ring-4 ring-white shadow-sm z-10 transition-transform group-hover:scale-150`}
                />

                <div
                  className={`flex-1 ${item.color} p-8 rounded-[35px] border-2 border-white shadow-sm hover:shadow-xl transition-all duration-300`}>
                  <div className="flex sm:flex-row flex-col justify-between sm:items-center gap-2 mb-3">
                    <h3 className={`text-xl font-black ${item.textColor}`}>
                      {item.name}
                    </h3>
                    <span
                      className={`px-4 py-1 rounded-full bg-white/60 text-xs font-black ${item.textColor} border border-white`}>
                      {item.time}
                    </span>
                  </div>
                  <p className={`font-bold opacity-70 ${item.textColor}`}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CAPAIAN SECTION (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex flex-col justify-center lg:col-span-5 bg-blue-950 shadow-2xl p-10 md:p-14 rounded-[50px] overflow-hidden text-white">
            {/* Animated Background Decor */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="-top-10 -right-10 absolute border-4 border-white/5 rounded-full w-40 h-40"
            />

            <h3 className="z-10 mb-10 font-black text-yellow-400 text-sm uppercase tracking-[0.3em]">
              Capaian Siswa
            </h3>

            <div className="z-10 space-y-10">
              {pencapaian.map((text, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="group flex gap-6">
                  <motion.div
                    whileHover={{ scale: 1.2, color: "#FACC15" }}
                    className="font-black text-white/20 text-4xl transition-colors">
                    0{idx + 1}
                  </motion.div>
                  <p className="pt-1 font-bold group-hover:text-yellow-50 text-lg md:text-xl leading-snug transition-colors">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Elemen Dekoratif Floating */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [12, 0, 12],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="bottom-10 left-10 absolute bg-orange-500/20 rounded-2xl w-16 h-16"
            />
          </motion.div>
        </div>

        {/* FOOTER SECTION: SMOOTH FADE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-24 text-center">
          <div className="bg-orange-500 mx-auto mb-8 rounded-full w-16 h-1"></div>
          <p className="font-handlee font-black text-blue-950 text-2xl md:text-3xl italic">
            "Setiap langkah kecil adalah kemenangan besar bagi mereka."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
