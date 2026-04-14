import { useLocation } from "react-router";
import Hero from "../components/Hero";
import { useEffect } from "react";
import VisiMisi from "../components/VisiMisi";
import ProgramPembelajaran from "../components/ProgramPembelajaran";
import ProgramKeagamaan from "../components/ProgramKeagamaan";
import Ekstrakulikuler from "../components/Ekstrakulikuler";
import AgendaSekolah from "../components/AgendaSekolah";
import Testimoni from "../components/Testimoni";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function HalUtama() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
  return (
    <>
      <Nav />
      <Hero />
      <VisiMisi />
      <ProgramPembelajaran />
      <ProgramKeagamaan />
      <Ekstrakulikuler />
      <AgendaSekolah />
      <Testimoni />
      <Footer />
    </>
  );
}
