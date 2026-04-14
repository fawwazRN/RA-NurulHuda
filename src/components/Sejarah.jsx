import { motion } from "framer-motion";

export default function Sejarah() {
  const sejarahData = [
    {
      title: "Kapan Berdiri",
      content:
        "RA Nurul Huda mulai menebar keceriaan sejak 12 Juli 1998. Lahir di tengah semangat perubahan untuk pendidikan anak yang lebih baik.",
      number: 1,
      color: "bg-[#FFEBEE]",
      border: "border-[#FFCDD2]",
      initialRotate: -5,
    },
    {
      title: "Siapa Pendiri",
      content:
        "Dipelopori oleh K.H. Ahmad Dahlan & Ibu Hj. Siti Aminah yang percaya bahwa setiap anak adalah bintang yang unik.",
      number: 2,
      color: "bg-[#E3F2FD]",
      border: "border-[#BBDEFB]",
      initialRotate: 5,
    },
    {
      title: "Latar Belakang",
      content:
        "Kami ingin setiap anak di lingkungan ini punya rumah kedua yang aman untuk bermain sambil mengenal nilai-nilai Islam.",
      number: 3,
      color: "bg-[#F1F8E9]",
      border: "border-[#DCEDC8]",
      initialRotate: -3,
    },
    {
      title: "Tujuan Awal",
      content:
        "Bukan cuma pintar baca tulis, tapi juga punya hati yang baik, mandiri, dan berani mencoba hal-hal baru!",
      number: 4,
      color: "bg-[#FFF3E0]",
      border: "border-[#FFE0B2]",
      initialRotate: 3,
    },
  ];

  // Varian untuk Container Grid
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  // Varian untuk Item Mading
  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: custom, // Menggunakan rotasi unik tiap item
      transition: { type: "spring", stiffness: 100, damping: 10 },
    }),
  };

  return (
    <section className="relative bg-[#FDFCF0] px-6 py-24 overflow-hidden font-nunito">
      <div className="z-10 relative mx-auto max-w-5xl">
        {/* HEADER DENGAN GAYA CORETAN */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center">
          <motion.span
            animate={{ x: [-2, 2, -2] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="inline-block font-black text-orange-500 text-sm uppercase tracking-widest">
            Mengenal Lebih Dekat
          </motion.span>
          <h2 className="mt-2 font-black text-blue-950 text-4xl md:text-6xl">
            Sejarah Singkat <br />
            <span className="text-orange-500">RA Nurul Huda</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 1 }}
            className="bg-yellow-400 mx-auto mt-6 rounded-full h-2"></motion.div>
        </motion.div>

        {/* CONTENT SEPERTI TEMPELAN MADING */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="gap-10 grid grid-cols-1 md:grid-cols-2">
          {sejarahData.map((item, index) => (
            <motion.div
              key={index}
              custom={item.initialRotate}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                rotate: 0,
                zIndex: 20,
                transition: { type: "spring", stiffness: 400 },
              }}
              className={`p-8 rounded-4xl shadow-lg border-4 ${item.border} ${item.color} relative group cursor-default`}>
              {/* Efek "Selotip" dengan Animasi Muncul */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.5 + index * 0.2 }}
                className="-top-4 left-1/2 absolute bg-white/60 shadow-sm backdrop-blur-sm border border-white/50 w-20 h-8 rotate-3 -translate-x-1/2"></motion.div>

              <div className="inline-block mb-6 font-extrabold text-blue-950/20 text-6xl group-hover:animate-bounce">
                {item.number}
              </div>
              <h3 className="mb-4 font-handlee font-black text-gray-800 text-2xl">
                {item.title}
              </h3>
              <p className="font-medium text-gray-700 text-lg leading-relaxed">
                {item.content}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* FOOTER QUOTE DENGAN TEXTURE CAT AIR */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="group relative bg-orange-400 shadow-2xl mt-24 p-12 border-8 border-white rounded-[50px] overflow-hidden text-center">
          {/* Efek Bercak Cat Dinamis */}
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="top-0 left-0 absolute opacity-10 w-full h-full pointer-events-none">
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full">
              <path
                fill="#FFF"
                d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,77.3,-44.7C85.4,-31.3,90.5,-15.7,88.9,-0.9C87.3,13.9,79,27.8,69.5,40.1C60.1,52.3,49.4,62.8,36.6,70.5C23.8,78.2,9,83.1,-5.6,92.8C-20.2,102.4,-34.5,116.8,-46.8,114.2C-59.1,111.6,-69.3,91.9,-76.6,75.9C-83.9,59.8,-88.2,47.3,-92.3,34.4C-96.3,21.5,-100.2,8.2,-97.6,-4.5C-95,-17.2,-86,-29.3,-76.8,-40.8C-67.6,-52.3,-58.3,-63.3,-46.6,-71.4C-34.9,-79.5,-20.8,-84.8,-5.4,-75.5C10,-66.2,20,-79.8,44.7,-76.4Z"
                transform="translate(100 100)"
              />
            </svg>
          </motion.div>

          <div className="z-10 relative">
            <motion.h4
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              className="mb-4 font-black text-white text-3xl md:text-5xl">
              "Mencetak Generasi Cerdas & Berakhlak Mulia"
            </motion.h4>
            <div className="bg-yellow-300 mx-auto rounded-full w-20 h-1"></div>
            <p className="mt-4 font-bold text-orange-900 uppercase tracking-[0.2em] group-hover:tracking-[0.3em] transition-all">
              Rumah Belajar Sejak 1998
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
