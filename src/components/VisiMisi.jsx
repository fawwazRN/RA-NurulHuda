import { motion } from "framer-motion";

export default function VisiMisi() {
  const misiData = [
    {
      text: "Menyelenggarakan pendidikan yang menyenangkan berbasis nilai Islam.",
      color: "bg-[#FF8A80]",
      textColor: "text-white",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      ),
    },
    {
      text: "Mengembangkan kreativitas anak melalui bermain dan eksplorasi alam.",
      color: "bg-[#FFB74D]",
      textColor: "text-white",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round">
          <path d="M12 10a6 6 0 0 0-6-6H3v2a6 6 0 0 0 6 6h3Z" />
          <path d="M12 22V12" />
          <path d="M12 10a6 6 0 0 1 6-6h3v2a6 6 0 0 1-6 6h-3Z" />
          <path d="M12 14a6 6 0 0 1 6 6v2h-2a6 6 0 0 1-6-6v-2Z" />
          <path d="M12 14a6 6 0 0 0-6 6v2h2a6 6 0 0 0 6-6v-2Z" />
        </svg>
      ),
    },
    {
      text: "Membentuk karakter mandiri dan santun kepada orang tua serta guru.",
      color: "bg-[#81C784]",
      textColor: "text-white",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      text: "Menjalin kerjasama yang harmonis antara sekolah, keluarga, dan warga.",
      color: "bg-[#64B5F6]",
      textColor: "text-white",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round">
          <path d="M17 6.1H3" />
          <path d="M21 12.1H3" />
          <path d="M15.1 18.1H3" />
        </svg>
      ),
    },
  ];

  // Varian untuk Container Misi (Stagger effect)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Varian untuk Item Misi individu
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section className="relative bg-[#F0F9FF] pt-32 pb-24 overflow-hidden font-nunito">
      <div className="top-0 left-0 absolute w-full overflow-hidden leading-none rotate-180">
        <svg
          className="block relative w-full h-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,23.39,911.39,59.42,1000,59.42c133.61,0,200-55.21,200-55.21V120H0V0.22S66.39,56.44,200,56.44c40.55,0,80.5-3.07,121.39,0Z"
            fill="#FDFCF0"></path>
        </svg>
      </div>

      <div className="z-10 relative mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="inline-block bg-orange-500 shadow-lg mb-6 px-6 py-2 rounded-full font-black text-white text-sm uppercase tracking-widest">
            Masa Depan Cerah
          </motion.div>
          <h2 className="font-black text-blue-950 text-4xl md:text-6xl leading-tight">
            Visi & <span className="text-orange-500">Misi</span> Kami
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="bg-yellow-400 shadow-sm mx-auto mt-6 rounded-full h-2"></motion.div>
        </motion.div>

        {/* VISI SECTION dengan Floating Effect */}
        <div className="flex justify-center mb-24">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              scale: { duration: 0.5 },
              y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
            }}
            className="bg-white shadow-2xl p-10 md:p-16 border-orange-500 border-b-12 rounded-[50px] max-w-4xl text-center">
            <h3 className="mb-4 font-black text-orange-500 text-xl uppercase tracking-[0.2em]">
              Visi
            </h3>
            <p className="font-handlee font-black text-blue-950 text-2xl md:text-4xl italic leading-relaxed">
              "Terwujudnya Anak Sholeh yang Cerdas, Kreatif, dan Berakhlak
              Mulia"
            </p>
          </motion.div>
        </div>

        <div className="mb-12 text-center">
          <h3 className="font-black text-blue-950 text-2xl uppercase">
            Misi Utama
          </h3>
        </div>

        {/* MISI GRID dengan Staggered Reveal */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {misiData.map((misi, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -15,
                scale: 1.02,
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
              className="group flex flex-col items-center">
              <div
                className={`${misi.color} p-8 rounded-[40px] shadow-xl h-full flex flex-col items-center justify-center border-4 border-white relative transition-shadow duration-300 group-hover:shadow-2xl`}>
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  className="mb-6 text-white">
                  {misi.icon}
                </motion.div>
                <p className="font-bold text-white text-lg text-center leading-relaxed">
                  {misi.text}
                </p>
              </div>

              <div className="flex gap-1 mt-6">
                <motion.div
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    delay: index * 0.2,
                  }}
                  className="bg-orange-400 rounded-full w-3 h-3"></motion.div>
                <div className="bg-blue-400 opacity-50 rounded-full w-3 h-3"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
