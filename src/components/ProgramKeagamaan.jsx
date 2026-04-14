import { motion } from "framer-motion";
import {
  Cloud,
  Moon,
  Sun,
  Heart,
  BookOpen,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";

export default function ProgramKeagamaan() {
  const programs = [
    {
      title: "Tahfizh Juz Amma",
      desc: "Anak-anak dibimbing menghafal surah-surah pendek dengan metode murottal yang ceria dan menyenangkan bagi usia dini.",
      icon: <Star className="text-orange-500" size={32} />,
      bgColor: "bg-orange-50",
      borderColor: "border-orange-400",
      accentColor: "bg-orange-400",
    },
    {
      title: "Shalat Dhuha",
      desc: "Praktik shalat berjamaah setiap pagi untuk melatih kemandirian dan kecintaan anak beribadah kepada Allah.",
      icon: <Sun className="text-blue-600" size={32} />,
      bgColor: "bg-blue-50",
      borderColor: "border-blue-600",
      accentColor: "bg-blue-600",
    },
    {
      title: "Doa & Hadits Harian",
      desc: "Pembiasaan doa sehari-hari dan hadits pendek untuk membentuk karakter anak yang beradab dan berakhlak mulia.",
      icon: <Heart className="text-orange-500" size={32} />,
      bgColor: "bg-orange-50",
      borderColor: "border-orange-400",
      accentColor: "bg-orange-400",
    },
    {
      title: "Kisah Rasul & Nabi",
      desc: "Membangun imajinasi positif melalui cerita kepahlawanan para Nabi untuk menumbuhkan rasa cinta kepada agama.",
      icon: <BookOpen className="text-blue-600" size={32} />,
      bgColor: "bg-blue-50",
      borderColor: "border-blue-600",
      accentColor: "bg-blue-600",
    },
  ];

  // Variabel untuk animasi container (Parent)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  // Variabel untuk animasi item (Children)
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 60, damping: 20 },
    },
  };

  return (
    <section className="relative bg-[#F9F7F2] px-6 py-24 border-slate-200 border-t-8 border-dashed overflow-hidden font-nunito">
      {/* Background Decor - Smooth Floating Animation */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="top-10 left-10 absolute opacity-5">
        <Moon size={200} className="text-blue-950" />
      </motion.div>

      <motion.div
        animate={{
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="right-10 bottom-10 absolute opacity-5">
        <Cloud size={150} className="text-orange-400" />
      </motion.div>

      <div className="z-10 relative mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="flex md:flex-row flex-col justify-between md:items-end gap-6 mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-blue-950 mb-4 px-4 py-1.5 rounded-lg font-black text-white text-xs uppercase tracking-widest">
              Pembiasaan Islami
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-black text-blue-950 text-4xl md:text-6xl leading-[1.1]">
              Membangun Hati <br />
              <span className="relative font-handlee text-orange-500">
                Pecinta Al-Quran
                {/* SVG Animated Underline */}
                <motion.svg
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="bottom-0 left-0 absolute w-full h-3"
                  viewBox="0 0 200 10">
                  <path
                    d="M0 5 Q 50 0, 100 5 T 200 5"
                    fill="none"
                    stroke="#F97316"
                    strokeWidth="4"
                  />
                </motion.svg>
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-sm font-bold text-slate-500 text-sm md:text-right leading-relaxed">
            Menanamkan nilai-nilai tauhid dan adab melalui aktivitas yang
            ringan, konsisten, dan penuh kasih sayang.
          </motion.p>
        </div>

        {/* Grid Program dengan Staggered Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="gap-8 grid grid-cols-1 md:grid-cols-2">
          {programs.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { type: "spring", stiffness: 300 },
              }}
              className={`group relative ${item.bgColor} border-2 ${item.borderColor} p-8 rounded-[40px] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden`}>
              {/* Decorative Accent Background */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 ${item.accentColor} opacity-5 -mr-10 -mt-10 rounded-full`}
              />

              <div className="z-10 relative flex items-start gap-6">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="bg-white shadow-sm p-5 rounded-3xl group-hover:rotate-6 transition-transform">
                  {item.icon}
                </motion.div>
                <div>
                  <h3 className="mb-3 font-black text-blue-950 text-2xl tracking-tight">
                    {item.title}
                  </h3>
                  <p className="font-bold text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Angka urutan dengan efek reveal */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.2 }}
                className="right-8 bottom-6 absolute font-black text-blue-950 text-4xl">
                0{idx + 1}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlight Section - Smooth Scale-up */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", damping: 20 }}
          className="relative bg-white shadow-2xl mt-12 p-8 md:p-12 border-4 border-slate-100 rounded-[50px] overflow-hidden">
          <div className="flex md:flex-row flex-col items-center gap-10">
            <div className="flex-1">
              <motion.div
                animate={{ x: [-2, 2, -2] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex items-center gap-3 mb-4 font-black text-blue-600 text-sm tracking-widest">
                <ShieldCheck size={20} />
                PROGRAM UNGGULAN
              </motion.div>
              <h3 className="mb-4 font-black text-blue-950 text-3xl leading-tight">
                Pendidikan Karakter Melalui Ibadah Praktis Sehari-hari
              </h3>
              <p className="mb-6 font-bold text-slate-500 leading-relaxed">
                Kami tidak hanya mengajarkan hafalan, tetapi juga membimbing
                anak-anak untuk merasakan indahnya berdekatan dengan Sang
                Pencipta dalam setiap langkah kecil mereka di sekolah.
              </p>

              <div className="flex flex-wrap gap-4">
                {["Wudhu Mandiri", "Adab Makan", "Infaq Jumat"].map(
                  (tag, i) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className={`${i === 1 ? "bg-blue-100 text-blue-700" : i === 2 ? "bg-slate-100 text-slate-700" : "bg-orange-100 text-orange-700"} px-4 py-2 rounded-xl font-black text-xs uppercase`}>
                      {tag}
                    </motion.span>
                  ),
                )}
              </div>
            </div>

            {/* Dokumentasi Video/Gambar Placeholder dengan Animasi Pulse */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative flex justify-center items-center bg-slate-100 shadow-inner border-8 border-white rounded-[40px] w-full md:w-1/3 aspect-square overflow-hidden cursor-pointer">
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 bg-blue-400 blur-3xl rounded-full"
              />
              <Users size={80} className="z-10 text-blue-950/20" />
              <div className="z-20 absolute inset-0 flex justify-center items-center">
                <span className="px-6 font-black text-blue-950 text-center">
                  Dokumentasi Kegiatan Keagamaan
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
