import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, ChevronRight, Bell } from "lucide-react";

export default function AgendaSekolah() {
  const agenda = [
    {
      date: "15",
      month: "Okt",
      title: "Pemeriksaan Kesehatan Berkala",
      time: "08:00 - 10:00 WIB",
      location: "Aula RA Nurul Huda",
      color: "bg-orange-50",
      textColor: "text-orange-600",
      borderColor: "border-orange-100",
    },
    {
      date: "22",
      month: "Okt",
      title: "Kunjungan ke Perpustakaan Kota",
      time: "08:30 - Selesai",
      location: "Titik Kumpul Sekolah",
      color: "bg-blue-50",
      textColor: "text-blue-600",
      borderColor: "border-blue-100",
    },
    {
      date: "10",
      month: "Nov",
      title: "Peringatan Hari Pahlawan (Kostum)",
      time: "07:30 - 11:00 WIB",
      location: "Halaman Sekolah",
      color: "bg-purple-50",
      textColor: "text-purple-600",
      borderColor: "border-purple-100",
    },
  ];

  // Varians untuk animasi list agar muncul bergantian (stagger)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="agenda" className="bg-[#FDFCFB] px-6 py-24 font-nunito">
      <div className="mx-auto max-w-4xl">
        {/* Header Agenda */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-blue-50 mb-4 px-4 py-1.5 rounded-xl font-black text-[10px] text-blue-600 uppercase tracking-widest">
            <Bell size={14} className="animate-bounce" /> Update Agenda
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-black text-blue-950 text-4xl md:text-5xl">
            Agenda <span className="text-orange-500">Mendatang</span>
          </motion.h2>
        </div>

        {/* List Agenda dengan Staggered Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6">
          {agenda.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ x: 10 }} // Efek geser sedikit saat hover
              className="group flex md:flex-row flex-col items-center gap-6 bg-white hover:bg-slate-50 shadow-sm hover:shadow-xl p-6 md:p-8 border border-slate-100 rounded-[2.5rem] transition-all duration-500 cursor-pointer">
              {/* Box Tanggal */}
              <motion.div
                whileHover={{ rotate: [-5, 5, -5, 0] }}
                className={`${item.color} ${item.borderColor} border-2 rounded-3xl p-4 min-w-[100px] text-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                <p className={`text-3xl font-black ${item.textColor}`}>
                  {item.date}
                </p>
                <p className="font-black text-slate-400 text-xs uppercase tracking-widest">
                  {item.month}
                </p>
              </motion.div>

              {/* Konten Agenda */}
              <div className="flex-grow space-y-3 md:text-left text-center">
                <h3 className="font-black text-blue-950 group-hover:text-orange-500 text-xl md:text-2xl transition-colors duration-300">
                  {item.title}
                </h3>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 font-bold text-slate-400 text-sm">
                  <div className="flex items-center gap-2 group-hover:text-slate-600 transition-colors">
                    <Clock size={16} className="text-blue-400" />
                    <span>{item.time}</span>
                  </div>
                  <div className="flex items-center gap-2 group-hover:text-slate-600 transition-colors">
                    <MapPin size={16} className="text-orange-400" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              {/* Action Button dengan Animasi Arrow */}
              <motion.button
                whileTap={{ scale: 0.8 }}
                className="flex justify-center items-center bg-slate-50 group-hover:bg-blue-950 shadow-inner rounded-full w-14 h-14 text-slate-300 group-hover:text-white transition-all duration-300">
                <ChevronRight
                  size={28}
                  className="transition-transform group-hover:translate-x-1"
                />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Info Tambahan */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center">
          <p className="font-bold text-slate-400 text-sm italic">
            * Jadwal sewaktu-waktu dapat berubah. Informasi lebih lanjut akan
            dikirim melalui grup WhatsApp kelas.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
