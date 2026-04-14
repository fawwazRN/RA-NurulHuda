import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function TeacherProfile() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Animasi untuk ikon dekorasi latar belakang agar bergerak saat scroll
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const teachers = [
    {
      name: "Ibu Siti Aminah, S.Pd.AUD",
      role: "Kepala Sekolah & Wali Kelas A",
      education: "S1 Pendidikan Anak Usia Dini - UIN Sunan Kalijaga",
      image:
        "https://images.unsplash.com/photo-1580894742597-8be71871e162?q=80&w=400&auto=format&fit=crop",
      color: "border-pink-300 bg-pink-50",
      textColor: "text-pink-950",
      tagColor: "bg-pink-100 text-pink-700",
    },
    {
      name: "Bapak Ahmad Dahlan, S.Pd.I",
      role: "Guru Agama & Hafalan Al-Quran",
      education: "S1 Pendidikan Agama Islam - IIQ Jakarta",
      image:
        "https://images.unsplash.com/photo-1607990281513-2c110a25bb8c?q=80&w=400&auto=format&fit=crop",
      color: "border-blue-300 bg-blue-50",
      textColor: "text-blue-950",
      tagColor: "bg-blue-100 text-blue-700",
    },
    {
      name: "Ibu Fatimah Zahra, S.Psi",
      role: "Wali Kelas B & Konseling Anak",
      education: "S1 Psikologi Pendidikan - Universitas Indonesia",
      image:
        "https://images.unsplash.com/photo-1544717305-45254b341041?q=80&w=400&auto=format&fit=crop",
      color: "border-green-300 bg-green-50",
      textColor: "text-green-950",
      tagColor: "bg-green-100 text-green-700",
    },
    {
      name: "Ibu Aisyah Rahma, S.Sn",
      role: "Guru Kesenian & Kreativitas",
      education: "S1 Seni Rupa - Institut Seni Indonesia",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
      color: "border-yellow-400 bg-yellow-50",
      textColor: "text-yellow-950",
      tagColor: "bg-yellow-100 text-yellow-800",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotate: -2 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        delay: index * 0.1,
        type: "spring",
        stiffness: 80,
        damping: 12,
      },
    }),
  };

  return (
    <section
      ref={containerRef}
      className="relative bg-white px-6 md:px-16 py-24 overflow-hidden font-nunito">
      {/* Dekorasi Latar Belakang Parallax */}
      <motion.div
        style={{ y: y1 }}
        className="top-10 left-10 absolute opacity-10 text-9xl pointer-events-none">
        🎨
      </motion.div>
      <motion.div
        style={{ y: y2 }}
        className="right-10 bottom-10 absolute opacity-10 text-9xl pointer-events-none">
        ✨
      </motion.div>

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="z-10 relative mb-20 text-center">
          <span className="inline-block bg-orange-100 shadow-sm mb-4 px-6 py-2 rounded-full font-black text-orange-600 text-sm uppercase tracking-widest">
            Mengenal Lebih Dekat
          </span>
          <h2 className="font-black text-blue-950 text-4xl md:text-6xl leading-tight">
            Para Pendidik <span className="text-orange-500">Hebat</span> Kami
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="bg-yellow-400 shadow-sm mx-auto mt-6 rounded-full h-2"></motion.div>
        </motion.div>

        <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {teachers.map((teacher, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              whileHover={{
                y: -15,
                rotate: index % 2 === 0 ? 1 : -1,
                transition: { type: "spring", stiffness: 300 },
              }}
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className={`relative flex flex-col items-center p-8 border-4 ${teacher.color} rounded-[40px] shadow-lg group overflow-hidden transition-shadow duration-300 hover:shadow-2xl`}>
              {/* Foto Guru dengan Fluid Blob Animation */}
              <motion.div
                animate={{
                  borderRadius: [
                    "42% 58% 70% 30% / 45% 45% 55% 55%",
                    "58% 42% 35% 65% / 55% 55% 45% 45%",
                    "42% 58% 70% 30% / 45% 45% 55% 55%",
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                }}
                className="shadow-md mb-6 border-8 border-white ring-4 ring-transparent group-hover:ring-white/50 w-40 h-40 overflow-hidden transition-all">
                <motion.img
                  whileHover={{ scale: 1.15 }}
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <div className="flex flex-col justify-center items-center text-center grow">
                <motion.h3
                  whileHover={{ scale: 1.05 }}
                  className={`text-xl font-black ${teacher.textColor} mb-1 leading-snug`}>
                  {teacher.name}
                </motion.h3>
                <p className="mb-4 font-bold text-gray-700 text-sm italic">
                  {teacher.role}
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className={`${teacher.tagColor} px-4 py-2 rounded-full text-xs font-black tracking-tight leading-tight shadow-inner`}>
                  🎓 {teacher.education}
                </motion.div>
              </div>

              {/* Pop-up Heart Icon on Hover */}
              <motion.div
                initial={{ y: 20, opacity: 0, scale: 0 }}
                whileHover={{
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  rotate: [0, 15, -15, 0],
                }}
                className="top-4 right-4 absolute drop-shadow-md text-2xl cursor-default">
                ❤️
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* FOOTER SECTION dengan Bounce & Glow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="group relative bg-blue-950 shadow-2xl mt-24 p-10 md:p-14 rounded-[40px] overflow-hidden text-white text-center">
          <div className="z-10 relative">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-4 font-handlee text-xl md:text-3xl italic leading-relaxed">
              "Kami berkomitmen memberikan dedikasi penuh dan kasih sayang dalam
              setiap proses belajar putra-putri Anda."
            </motion.p>
            <motion.p
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="font-bold text-yellow-400 text-sm uppercase tracking-widest">
              — Tim Pendidik RA Nurul Huda
            </motion.p>
          </div>

          {/* Ornamen Latar Belakang yang Berdenyut */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="-top-10 -right-10 absolute bg-white/10 rounded-full w-60 h-60"></motion.div>
          <motion.div
            animate={{ x: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="bottom-0 -left-10 absolute bg-orange-500/20 rounded-full w-32 h-32 translate-y-1/2"></motion.div>
        </motion.div>
      </div>
    </section>
  );
}
