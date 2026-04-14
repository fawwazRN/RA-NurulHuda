import { BrowserRouter, Route, Routes } from "react-router";
import DetailMenggambar from "./components/DetailMenggambar";
import DetailOutbound from "./components/DetailOutbond";
import HalUtama from "./pages/HalUtama";
import Profil from "./pages/Profil";
import Galleri from "./pages/Galleri";
import Pendaftaran from "./pages/Pendaftaran";
import Info from "./pages/Info";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HalUtama />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/galeri" element={<Galleri />} />
          <Route path="/galeri" element={<Galleri />} />
          <Route path="/berita" element={<Info />} />
          <Route path="/pendaftaran" element={<Pendaftaran />} />
          <Route path="/ekskul/menggambar" element={<DetailMenggambar />} />
          <Route path="/ekskul/outbound" element={<DetailOutbound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
