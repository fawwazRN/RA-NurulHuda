import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Heart,
  MessageCircle, // Kita pakai ini sebagai ganti medsos
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="kontak"
      className="relative bg-blue-950 px-6 pt-24 pb-12 overflow-hidden font-nunito">
      {/* Efek Cahaya Dekoratif */}
      <div className="top-0 left-1/4 absolute bg-blue-500/10 blur-[120px] rounded-full w-96 h-96" />
      <div className="right-0 bottom-0 absolute bg-orange-500/10 blur-[100px] rounded-full w-64 h-64" />

      <div className="z-10 relative mx-auto max-w-6xl">
        <div className="gap-16 grid grid-cols-1 lg:grid-cols-12 mb-20">
          {/* KOLOM 1: INFO UTAMA (4/12) */}
          <div className="space-y-8 lg:col-span-4">
            <div>
              <h2 className="mb-4 font-black text-white text-3xl italic">
                RA <span className="text-orange-400">Nurul Huda</span>
              </h2>
              <p className="font-bold text-blue-100/60 text-sm leading-relaxed">
                Membangun pondasi akhlak dan kreativitas anak sejak dini dengan
                kasih sayang dan nilai-nilai Islami.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 text-blue-100/80">
                <MapPin className="text-orange-400 shrink-0" size={20} />
                <p className="font-bold text-sm">
                  Jl. Pendidikan No. 123, Desa Damai, Kec. Ceria, Kabupaten
                  Bekasi
                </p>
              </div>
              <div className="flex items-center gap-4 text-blue-100/80">
                <Clock className="text-orange-400 shrink-0" size={20} />
                <p className="font-bold text-sm">
                  Senin - Jumat: 07:30 - 14:00
                </p>
              </div>
            </div>

            {/* Pengganti Medsos: Tombol Chat Langsung */}
            <motion.a
              href="https://wa.me/6281234567890" // Ganti no WA asli
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 shadow-green-500/20 shadow-lg px-6 py-4 rounded-2xl font-black text-white text-xs uppercase tracking-widest transition-all">
              <MessageCircle size={20} /> Chat WhatsApp Admin
            </motion.a>
          </div>

          {/* KOLOM 2: FORMULIR CEPAT (5/12) */}
          <div className="lg:col-span-5">
            <div className="bg-white/5 shadow-2xl backdrop-blur-xl p-8 border border-white/10 rounded-[3rem]">
              <h3 className="mb-6 font-black text-white text-xl">
                Kirim Pesan Cepat
              </h3>
              <form className="space-y-4">
                <div className="gap-4 grid grid-cols-2">
                  <input
                    type="text"
                    placeholder="Nama Bunda"
                    className="bg-white/5 px-5 py-4 border border-white/10 rounded-2xl outline-none focus:ring-2 focus:ring-orange-400 text-white placeholder:text-blue-100/30 text-sm transition-all"
                  />
                  <input
                    type="text"
                    placeholder="WhatsApp"
                    className="bg-white/5 px-5 py-4 border border-white/10 rounded-2xl outline-none focus:ring-2 focus:ring-orange-400 text-white placeholder:text-blue-100/30 text-sm transition-all"
                  />
                </div>
                <textarea
                  placeholder="Ada yang bisa kami bantu?"
                  rows="3"
                  className="bg-white/5 px-5 py-4 border border-white/10 rounded-2xl outline-none focus:ring-2 focus:ring-orange-400 w-full text-white placeholder:text-blue-100/30 text-sm transition-all"></textarea>
                <button className="flex justify-center items-center gap-3 bg-orange-500 hover:bg-orange-600 shadow-lg shadow-orange-500/20 py-4 rounded-2xl w-full font-black text-white text-xs uppercase tracking-widest active:scale-95 transition-all">
                  Kirim Sekarang <Send size={16} />
                </button>
              </form>
            </div>
          </div>

          {/* KOLOM 3: MINI MAP (3/12) */}
          <div className="lg:col-span-3">
            <h3 className="mb-6 font-black text-white text-lg">Lokasi Kami</h3>
            <div className="shadow-2xl grayscale hover:grayscale-0 border-4 border-white/10 rounded-[2.5rem] h-48 lg:h-64 overflow-hidden transition-all duration-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1!2d106.8!3d-6.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMDAuMCJTIDEwNsKwNDgnMDAuMCJF!5e0!3m2!1sid!2sid!4v1234567890"
                className="border-0 w-full h-full"
                allowFullScreen=""
                loading="lazy"></iframe>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR (Branding) */}
        <div className="flex md:flex-row flex-col justify-between items-center gap-6 pt-12 border-white/5 border-t md:text-left text-center">
          <p className="font-bold text-blue-100/30 text-xs uppercase tracking-widest">
            © 2024 RA Nurul Huda. All rights reserved.
          </p>

          <div className="group flex items-center gap-2 cursor-default">
            <span className="font-black text-[10px] text-blue-100/30 uppercase tracking-widest">
              Made with
            </span>
            <Heart
              size={14}
              className="fill-red-500 text-red-500 animate-pulse"
            />
            <span className="font-black text-white group-hover:text-orange-400 text-xs uppercase tracking-widest transition-all">
              by ber3
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
