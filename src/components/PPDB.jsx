import { motion } from "framer-motion";
import {
  ClipboardCheck,
  Phone,
  FileText,
  CreditCard,
  ArrowRight,
  Info,
  Clock,
  CheckCircle2,
} from "lucide-react";

export default function PPDB() {
  const syarat = [
    "Fotokopi Akta Kelahiran (2 lembar)",
    "Fotokopi Kartu Keluarga (2 lembar)",
    "Pas Foto 3x4 Background Merah (4 lembar)",
    "Mengisi Formulir Pendaftaran",
    "Usia minimal 4 tahun (TK A) & 5 tahun (TK B)",
  ];

  const alur = [
    {
      step: "01",
      title: "Ambil Formulir",
      desc: "Datang langsung ke sekolah atau isi formulir online.",
    },
    {
      step: "02",
      title: "Lengkapi Berkas",
      desc: "Siapkan semua dokumen persyaratan yang diminta.",
    },
    {
      step: "03",
      title: "Wawancara & Observasi",
      desc: "Pertemuan singkat orang tua dan anak dengan guru.",
    },
    {
      step: "04",
      title: "Daftar Ulang",
      desc: "Penyelesaian administrasi dan pengambilan seragam.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section
      id="ppdb"
      className="relative bg-[#F8FAFC] px-6 py-24 overflow-hidden font-nunito">
      {/* Background Decor */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="-top-24 -left-24 absolute opacity-[0.03] pointer-events-none">
        <ClipboardCheck size={400} />
      </motion.div>

      <div className="z-10 relative mx-auto max-w-6xl">
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-orange-500 mb-4 px-4 py-1.5 rounded-xl font-black text-[10px] text-white uppercase tracking-widest">
            Tahun Ajaran 2024/2025
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="font-black text-blue-950 text-4xl md:text-6xl">
            Pendaftaran <span className="text-orange-500">Siswa Baru</span>
          </motion.h2>
          <p className="mt-4 font-bold text-slate-500">
            Bergabunglah bersama keluarga besar RA Nurul Huda
          </p>
        </div>

        <div className="gap-12 grid grid-cols-1 lg:grid-cols-12">
          {/* SYARAT PENDAFTARAN */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-white shadow-2xl p-8 md:p-12 border-2 border-slate-100 rounded-[3rem]">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-orange-100 p-3 rounded-2xl text-orange-500">
                <FileText size={28} />
              </div>
              <h3 className="font-black text-blue-950 text-2xl">Persyaratan</h3>
            </div>

            <ul className="space-y-4">
              {syarat.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group flex items-start gap-4">
                  <CheckCircle2
                    className="mt-1 text-green-500 shrink-0"
                    size={20}
                  />
                  <span className="font-bold text-slate-600 group-hover:text-blue-950 leading-tight transition-colors">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* Kotak Info Biaya */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-blue-50 mt-10 p-6 border-2 border-blue-100 border-dashed rounded-3xl">
              <div className="flex items-center gap-3 mb-2 text-blue-700">
                <CreditCard size={20} />
                <span className="font-black text-sm uppercase">
                  Biaya Pendaftaran
                </span>
              </div>
              <p className="font-black text-blue-950 text-2xl">Rp 150.000,-</p>
              <p className="mt-1 font-bold text-blue-400 text-xs italic">
                *Sudah termasuk biaya observasi & formulir
              </p>
            </motion.div>
          </motion.div>

          {/* ALUR PENDAFTARAN */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-blue-100 p-3 rounded-2xl text-blue-600">
                <ClipboardCheck size={28} />
              </div>
              <h3 className="font-black text-blue-950 text-2xl">
                Alur Pendaftaran
              </h3>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="gap-4 grid grid-cols-1 md:grid-cols-2">
              {alur.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -5, x: 5 }}
                  className="bg-white hover:bg-slate-50 shadow-sm p-6 border border-slate-100 rounded-4xl transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <span className="font-black text-blue-100 group-hover:text-blue-200 text-4xl transition-colors">
                      {item.step}
                    </span>
                    <div className="bg-slate-100 p-2 rounded-lg text-slate-400">
                      <ArrowRight size={16} />
                    </div>
                  </div>
                  <h4 className="mb-2 font-black text-blue-950 text-lg">
                    {item.title}
                  </h4>
                  <p className="font-bold text-slate-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* KONTAK & FORMULIR */}
            <div className="gap-4 grid grid-cols-1 md:grid-cols-2 mt-8">
              {/* WhatsApp Card */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-green-500 shadow-xl p-1 rounded-4xl">
                <div className="flex justify-between items-center bg-white p-6 rounded-[1.8rem]">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 p-3 rounded-2xl text-green-600">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="font-black text-[10px] text-slate-400 uppercase">
                        WhatsApp
                      </p>
                      <p className="font-black text-blue-950 text-base">
                        0812-3456-7890
                      </p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}>
                    <ArrowRight className="text-green-500" size={20} />
                  </motion.div>
                </div>
              </motion.div>

              {/* Online Form Card */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-orange-500 shadow-xl p-1 rounded-4xl">
                <div className="flex justify-between items-center bg-white p-6 rounded-[1.8rem] cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="bg-orange-100 p-3 rounded-2xl text-orange-500">
                      <Info size={24} />
                    </div>
                    <div>
                      <p className="font-black text-[10px] text-slate-400 uppercase">
                        Pendaftaran
                      </p>
                      <p className="font-black text-blue-950 text-base">
                        Formulir Online
                      </p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}>
                    <ArrowRight className="text-orange-500" size={20} />
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Jam Operasional */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="flex justify-center items-center gap-4 mt-8 font-bold text-slate-400 text-sm italic">
              <Clock size={18} className="text-orange-400" />
              Layanan Informasi: Senin - Jumat (08:00 - 14:00 WIB)
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
