import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", to: "/" },
    { name: "Profil", to: "/profil" },
    { name: "Galeri", to: "/galeri" },
    { name: "Berita", to: "/berita" },
    { name: "Pendaftaran", to: "/pendaftaran" },
  ];

  const socmedItems = [
    {
      name: "Instagram",
      href: "https://instagram.com",
      hoverColor: "#E1306C",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4l0 -8" />
          <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
          <path d="M16.5 7.5v.01" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      hoverColor: "#00A0DC",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M8 11v5" />
          <path d="M8 8v.01" />
          <path d="M12 16v-5" />
          <path d="M16 16v-3a2 2 0 1 0 -4 0" />
          <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4l0 -10" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://facebook.com",
      hoverColor: "#1877F2",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
        </svg>
      ),
    },
  ];

  // Varians untuk animasi list menu agar muncul satu per satu
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="top-0 z-50 fixed bg-white shadow-lg m-auto border-orange-500 border-b-8 rounded-b-3xl w-full">
      <div className="flex justify-between items-center mx-auto px-6 md:px-16 py-4 max-w-(--breakpoint-xl)">
        {/* LOGO TK dengan Hover Bounce */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/" className="flex items-center gap-2">
            <motion.div
              initial={{ rotate: -180, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="flex justify-center items-center bg-orange-500 shadow-md rounded-full w-10 h-10 font-black text-white text-xl">
              RA
            </motion.div>
            <span className="hidden md:inline font-nunito font-black text-blue-950 text-2xl">
              Nurul <span className="text-orange-500">Huda</span>
            </span>
          </Link>
        </motion.div>

        {/* MENU DESKTOP */}
        <div className="hidden lg:flex items-center gap-8">
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex gap-6 font-nunito font-bold text-blue-950 text-lg">
            {menuItems.map((item) => (
              <motion.li key={item.name} variants={itemVariants}>
                <Link
                  to={item.to}
                  className="group relative hover:text-orange-500 transition-colors duration-300">
                  {item.name}
                  {/* Animasi underline yang smooth */}
                  <span className="-bottom-1 left-0 absolute bg-orange-500 w-0 group-hover:w-full h-0.5 transition-all duration-300" />
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          {/* SOSMED */}
          <ul className="flex gap-4 pl-6 border-gray-300 border-l-2">
            {socmedItems.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{
                  scale: 1.3,
                  rotate: 15,
                  color: item.hoverColor, // Warna berubah sesuai identitas masing-masing
                }}
                className="text-gray-500 transition-colors">
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.icon}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* HAMBURGER (Mobile) */}
        <div className="lg:hidden flex items-center">
          <motion.button
            whileTap={{ scale: 0.8 }}
            onClick={() => setIsOpen(!isOpen)}
            className="outline-none text-blue-950">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                animate={{
                  d: isOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16",
                }}
                transition={{ duration: 0.3 }}
              />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* MOBILE MENU dengan Transisi Spring */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className="lg:hidden bg-white px-6 pb-6 overflow-hidden">
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-4 font-bold text-blue-950 text-center">
              {menuItems.map((item) => (
                <motion.li
                  key={item.name}
                  variants={itemVariants}
                  onClick={() => setIsOpen(false)}>
                  <Link
                    to={item.to}
                    className="block py-2 hover:text-orange-500 active:scale-95 transition-transform">
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
