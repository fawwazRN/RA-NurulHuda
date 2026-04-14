import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Quote, Star, GraduationCap, Heart } from "lucide-react";
import { useEffect, useState } from "react";

// Sub-component untuk angka yang berhitung
function Counter({ value }) {
  const [displayValue, setDisplayValue] = useState(0);
  useEffect(() => {
    const controls = animate(0, value, {
      duration: 2,
      onUpdate: (latest) => setDisplayValue(Math.round(latest)),
    });
    return () => controls.stop();
  }, [value]);
  return <>{displayValue}</>;
}

export default function Testimoni() {
  const testimoni = [
    {
      id: 1,
      name: "Bunda Sarah",
      role: "Orang Tua Althaf (Kelompok B)",
      content:
        "Sejak sekolah di RA Nurul Huda, Althaf jadi jauh lebih mandiri dan hafalannya bertambah pesat. Gurunya sangat sabar dan komunikatif!",
      img: "https://images.unsplash.com/photo-1544129491-3b794e8459e3?auto=format&fit=crop&q=80&w=200",
    },
    {
      id: 2,
      name: "Ayah Budi",
      role: "Orang Tua Keysha (Alumni 2023)",
      content:
        "Kurikulumnya seimbang antara akademik dan karakter. Keysha bisa masuk SD Unggulan dengan lancar berkat bimbingan di sini.",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    },
  ];

  const alumni = [
    {
      name: "Rizky Ramadhan",
      year: "Alumni 2021",
      achievement: "Lulusan Terbaik di SD Islam Terpadu",
      img: "https://images.unsplash.com/photo-1503945438517-f65904a5adc0?auto=format&fit=crop&q=80&w=200",
    },
  ];

  return (
    <section
      id="testimoni"
      className="relative bg-[#F0FDF4] px-6 py-24 overflow-hidden font-nunito">
      {/* Dekorasi BG Animasi Melayang */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [12, 15, 12],
        }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="top-0 left-0 absolute opacity-30 w-full h-full pointer-events-none">
        <Heart className="top-10 right-10 absolute text-green-200" size={120} />
      </motion.div>

      <div className="z-10 relative mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-green-600 mb-4 px-4 py-1.5 rounded-xl font-black text-[10px] text-white uppercase tracking-widest">
            Cerita Ayah & Bunda
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-black text-blue-950 text-4xl md:text-5xl">
            Apa Kata{" "}
            <span className="font-handlee text-green-600">Mereka?</span>
          </motion.h2>
        </div>

        <div className="gap-8 grid grid-cols-1 lg:grid-cols-2 mb-20">
          {testimoni.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40, rotate: idx % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              whileHover={{
                y: -10,
                transition: { type: "spring", stiffness: 300 },
              }}
              viewport={{ once: true }}
              className="relative bg-white shadow-sm hover:shadow-xl p-8 md:p-12 border border-green-100 rounded-[3.5rem] transition-shadow duration-300">
              <Quote
                className="top-8 right-12 absolute text-green-50/50"
                size={80}
              />

              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + i * 0.1 }}>
                    <Star
                      size={16}
                      className="fill-orange-400 text-orange-400"
                    />
                  </motion.div>
                ))}
              </div>

              <p className="z-10 relative mb-8 font-bold text-slate-600 italic leading-relaxed">
                "{item.content}"
              </p>

              <div className="flex items-center gap-4">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={item.img}
                  alt={item.name}
                  className="border-4 border-green-50 rounded-full w-14 h-14 object-cover"
                />
                <div>
                  <h4 className="font-black text-blue-950">{item.name}</h4>
                  <p className="font-bold text-slate-400 text-xs uppercase">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Alumni Sukses dengan Glow Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-blue-950 p-8 md:p-16 rounded-[4rem] overflow-hidden text-white">
          {/* Efek Cahaya Bergerak */}
          <motion.div
            animate={{
              x: [-100, 500, -100],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{ repeat: Infinity, duration: 10 }}
            className="absolute inset-0 bg-linear-to-r from-transparent via-green-400/20 to-transparent skew-x-12"
          />

          <div className="top-0 right-0 absolute opacity-10 p-8">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 6 }}>
              <GraduationCap size={200} />
            </motion.div>
          </div>

          <div className="z-10 relative flex md:flex-row flex-col items-center gap-10">
            <div className="md:text-left text-center grow">
              <h3 className="mb-4 font-black text-green-400 text-2xl md:text-3xl tracking-tight">
                Jejak Alumni Sukses
              </h3>
              <p className="mb-8 max-w-lg font-bold text-blue-100/60">
                Alumni RA Nurul Huda tersebar di berbagai sekolah unggulan dan
                terus mengukir prestasi dengan pondasi akhlak yang telah
                dibangun sejak dini.
              </p>

              {alumni.map((person, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 bg-white/5 p-4 border border-white/10 rounded-3xl w-fit">
                  <img
                    src={person.img}
                    className="rounded-2xl w-12 h-12 object-cover"
                  />
                  <div>
                    <p className="font-black text-sm">{person.name}</p>
                    <p className="font-bold text-[10px] text-green-400 uppercase tracking-widest">
                      {person.achievement}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="shrink-0">
              <div className="bg-white/10 shadow-2xl shadow-green-900/20 backdrop-blur-md p-10 border border-white/20 rounded-[3rem] text-center">
                <p className="mb-1 font-black text-green-400 text-5xl">
                  <Counter value={98} />%
                </p>
                <p className="font-black text-[10px] text-blue-300 uppercase tracking-widest">
                  Lulus Seleksi
                  <br />
                  Sekolah Lanjutan
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
